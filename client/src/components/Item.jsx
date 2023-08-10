import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  console.log(item)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {url},
    },
  } = image;

  return (
    <Box width={width} padding="10px" backgroundColor="lightblue" borderRadius="10px"
    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer",borderRadius: "7px" }}
        />
        <Box
          display={isNonMobile?isHovered ? "block" : "none": "block"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: "green", color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <div style={{ display: "flex" , justifyContent:"space-between"}}>
        <Typography variant="subtitle2" sx={{backgroundColor:category === "newArrivals"
            ? "#4169e1"
            : category === "topRated"
            ? "#0047ab"
            : category === "bestSellers"
            ? "#000080"
              : neutral.dark,
          color: "white",
          width: "fit-content",
          padding: "4px",
          borderRadius: "6px",
          fontSize: "2vh"
        }} >
          {category&&category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
          <Typography fontWeight="bold"
            fontSize="2.3vh"
            color="white"
            backgroundColor="black"
            padding="3px"
            paddingBottom="0.4px"
            display="flex"
            alignItems="center"
            borderRadius="7px"
          >₹{price}</Typography> 
        </div>

        <Typography
          fontWeight="600"
    fontSize="1.7vh"
    marginTop="0.5vh">{name}</Typography>
        
      </Box>
    </Box>

  );
};

export default Item;