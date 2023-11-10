
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '@mui/material/Grid';
import ReportGrid from "../Reports/ReportGrid";
import reportData from "../Reports/reports.json";
import {Box } from "@mui/material";
import React from 'react';



function reportsearch() {
    return (
    <Grid container spacing = {2} display= 'flex' flexDirection="column">
        <Grid item xs={12}>
           <Header/> {/* include header*/}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '20px', justifyContent: 'center' }}>
            <Box sx={{
                padding: '30px'
            }}>
                <ReportGrid data={reportData} /> {/* pass the reportdata (.json) file to the ReportGrid component*/}
            </Box>
        </Grid>
        <Grid item xs={12}>
          <Footer /> {/* include footer*/}
        </Grid>
    </Grid>
    );
}

export default reportsearch;