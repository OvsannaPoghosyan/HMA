import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Կապ մեզ հետ</Typography>
        <p>
       
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
         <h1>Հեռախոս <p>+374 (55) 52 06 91, +374 (10) 58-27-61</p></h1>
         <h1>Էլ – հասցե<p>historymuseum.am@gmail.com  admin@historymuseum.am</p></h1>
         <h1>Հասցե <p>Հայաստան  Երևան 375010  Հանրապետության հրապարակ 4</p></h1>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;