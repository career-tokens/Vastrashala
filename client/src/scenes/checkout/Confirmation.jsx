import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Confirmation.css"
import { useStytchUser } from "@stytch/react";

const Confirmation = () => {
  //for updating the change to the user's confirmed buyouts
  const { user } = useStytchUser();
  const email = user.emails[0].email;
  async function updateUserBody() {
    const response = await fetch(`https://vastra-backend-node.onrender.com/api/users/${email}`);
    const data = await response.json();
    if (data.data.body) {
      for (const element of data.data.body) {
        data.data.change.push(element);
      }
    }
    const body = {
      _id: data.data._id,
      title: data.data._id,
      body: data.data.change,
      change:null,
      lastCreatedAt: Date.now(),
      
};
    await fetch(`https://vastra-backend-node.onrender.com/api/users/${email}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  updateUserBody();
  return (
    <Box m="20vh auto" width="80%" height="20vh">
      <Alert severity="success">
        <AlertTitle fontSize="3vh">Success</AlertTitle>
        <strong style={{fontSize:"2vh"}}> You have successfully made an Order —{" "}
        Congrats on Making your Purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;