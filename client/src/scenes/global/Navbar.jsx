import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, useMediaQuery } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

import vastrashalaLogo from "../../React App.png"; // Adjust the path accordingly

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const iconButtonStyle = {
    backgroundColor: "#010536",
    color: "white",
    transform: "scale(1.2)",
    transition: "background-color 0.3s",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={isNonMobile ? "115px" : "69px"}
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="96%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          <img
            src={vastrashalaLogo}
            alt="Vastrashala Logo"
            style={{
              cursor: "pointer",
              width: isNonMobile ? "300px" : "175px",
              position: "absolute",
              top: "2px",
              left: "1vw",
              borderRadius: "72px",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ ...iconButtonStyle, "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" } }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{
            ...iconButtonStyle,
            display:isNonMobile?"flex":"none",
            "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" }
          }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ ...iconButtonStyle, "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" } }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{
            ...iconButtonStyle,
            display:isNonMobile?"none":"flex",
            "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" }
          }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
