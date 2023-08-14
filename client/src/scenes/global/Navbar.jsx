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

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useState } from "react";

import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";//for logout


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    stytch.session.revoke();
    setAnchorEl(null);
  }

  const iconButtonStyle = {
    backgroundColor: "#010536",
    color: "white",
    transform: "scale(1.2)",
    transition: "background-color 0.3s",
  };

  const stytch = useStytch();
  // Get the Stytch User object if available
  const { user } = useStytchUser();
  // Get the Stytch Session object if available
  const { session } = useStytchSession();

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
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
<Tooltip title="Account settings">
  <IconButton
    onClick={handleClick}
    sx={{
      ...iconButtonStyle,
      "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" }
    }}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  >
    <PersonOutline />
  </IconButton>
</Tooltip>
</Box>
<Menu
anchorEl={anchorEl}
id="account-menu"
open={open}
onClose={handleClose}
onClick={handleClose}
PaperProps={{
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}}
transformOrigin={{ horizontal: 'right', vertical: 'top' }}
anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
<MenuItem onClick={handleClose} sx={{fontSize:"2.5vmin"}}>
  <ListItemIcon >
     <AccountCircleIcon sx={{fontSize:"3.5vmin"}} />
  </ListItemIcon>
  Your Account
</MenuItem>
<MenuItem onClick={handleLogout} sx={{fontSize:"2.5vmin"}}>
  <ListItemIcon>
    <Logout sx={{fontSize:"3.5vmin"}} />
  </ListItemIcon>
  Logout
</MenuItem>
</Menu>
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
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
