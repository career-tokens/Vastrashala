import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Confirmation.css"

const Confirmation = () => {
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