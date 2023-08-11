import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

import emailjs from '@emailjs/browser';//for email sending service

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';//toast notification
  
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const templateParams = {
    to_email: email
  };//template for email
  
  const handleClick = () => { 
    emailjs.send(process.env.REACT_APP_SERVICE_SECRET, process.env.REACT_APP_TEMPLATE_SECRET, templateParams,process.env.REACT_APP_PUBLIC_KEY)
      .then(function (response) {
        toast.success('Subscription Added!!', {
          position: "top-right",
          theme:"dark"
          })
       console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        toast.error('Some error occurred!!', {
          position: "top-right",
          });
       console.log('FAILED...', error);
    });
  }

  return (
    <>
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton sx={{color:"mediumblue"}}>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3" color="#6a5acd">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive <b style={{ color: "green" ,fontWeight:"900",fontSize:"3vh"}}>₹20</b> coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography onClick={handleClick} sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
      </Box>
    <ToastContainer/>
      </>
  );
};

export default Subscribe;