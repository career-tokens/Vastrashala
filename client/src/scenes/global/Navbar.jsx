import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, ClickAwayListener, Grow, IconButton, MenuList, Paper, Popper, useMediaQuery } from "@mui/material";
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


import { useEffect, useRef, useState } from "react";

import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";//for logout


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleLogout = () => {
    stytch.session.revoke();
    
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

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
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
  <IconButton
    sx={{
      ...iconButtonStyle,
      "&:hover": { backgroundColor: "rgba(1, 5, 54, 0.8)" }
    }}
    ref={anchorRef}
    id="composition-button"
    aria-controls={open ? 'composition-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    onClick={handleToggle}
  >
    <PersonOutline />
  </IconButton>
  <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
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
</MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Box>
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
