import React from 'react';
import { Paper, Box, Grid } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Container maxWidth="lg" style={{ paddingBottom: '20px' }}>
    <Box
      component="footer" display="flex" justifyContent="center"> {/*Set footer settings*/}
      <Paper style={{ backgroundColor: '#9F99BA ', width: '100%' }}> {/*background colour for footer, and provide rounded corners*/}
      <Container maxWidth="lg" >
        <Grid container spacing={5} align="center" display="flex" style={{ padding: '20px' }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              COS30049, dedicated to providing the best contract auditing service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom> {/*Generic contact details*/}
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Group 2-53, Hawthorn, AUS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom> {/*Provide icon links to social media for the site*/}
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5} >
          <Typography variant="body2" color="text.secondary" align="center" style={{ paddingBottom: '10px' }}>
            {"Copyright © "}
            <Link color="inherit" href="localhost:3000">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()} {/*set copyright year to current*/}
            {"."}
          </Typography>
        </Box>
      </Container>
      </Paper>
    </Box>
    </Container>
  );
}

export default Footer;
