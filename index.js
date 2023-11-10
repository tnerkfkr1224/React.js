import React, { useState } from "react";
import Footer from "../../components/Footer/index.js";
import { Box, Paper, Typography, Button } from "@mui/material";
import Header from "../../components/Header/index.js";
import Grid from '@mui/material/Grid';
import axios from "axios"; // Import Axios

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select .sol file to upload.");
      return;
    }
    // FormData object to send the selected file
    const formData = new FormData();
    formData.append("file", selectedFile);
    
    // Uplading file
    console.log("File Uploading", selectedFile.name);
    //clear file after uploading
    // setSelectedFile(null);

    // HTTP POST request to backend API using Axios
    axios
      .post("http://localhost:8000/remediation/", formData) //FastAPI server URL 
      
      .then((response) => {
        // Handle the response from backend
        console.log("Response from backend:", response.data);
        // Clear the selected file
        setSelectedFile(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors
      });
      
  };

  return (
    <Grid container spacing={2} align="center" flexDirection="column">
      <Grid item xs={12}>
        {/* Show Header */}
        <Header />
      </Grid>

      <Box display="flex" flexDirection="column" align="center" style={{ padding: '50px' }}>
        <Typography style={{ justifyContent: 'center' }}>
          {/* Image on upload page */}
          <img src={require("../../assets/images/emoji_3.png")} alt="[report investigatation]" className="center" width='160' height='240' /><br />
        </Typography>
        <Box sx={{ display: "inline-flex" }}>
          <Grid item xs={12} display='flex' justifyContent='center' style={{ paddingBottom: '50px' }}>
            <Paper style={{ padding: '20px', justifyContent: 'center' }}>
              <Typography style={{ justifyContent: 'center' }}>
                We accept solidity (.sol) contracts of file size less than 5 MB.
              </Typography>
              <Typography style={{ padding: '5px' }}></Typography>
              <label htmlFor="fileInput" style={{ display: "block" }}>
                <input
                  type="file"
                  accept=".sol"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <Button
                  variant="outlined"
                  style={{ color: "#62569C", borderColor: "#62569C", outlineColor: "#62569C" }}
                  component="span"
                >
                  Select File
                </Button>
                <Typography style={{ padding: '10px' }}>then </Typography>
              </label>
              <Button variant="outlined" style={{ color: '#62569C', borderColor: '#62569C', outlineColor: '#62569C' }} onClick={handleUpload}>
                Confirm upload here!
              </Button>
            </Paper>
          </Grid>
        </Box>
      </Box>

      <Grid item xs={12}>
        {/* Show footer */}
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Upload;