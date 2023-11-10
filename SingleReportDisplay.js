import * as Mat from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState, useEffect } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function VulnsList(){
    const { reportID } = useParams(); // Get the reportID from the URL
    const [ReportName, setReportName] = useState("");
    const [Details,setDetails] = useState("");
    const [vulnerabilities, setVulnerabilities] = useState([]);//List of vulnerabilities
    //const API_URL = "http://localhost:8000/get_report/8"

    
    useEffect(() => {
        //Fetch data from the API when the compoenet mounts
        axios.get(`http://localhost:8000/get_report/8`)//Replace with your URL here
        .then((response) => {
        setReportName(response.data.data.reportName); 
        console.log(response.data);
        setDetails(response.data.data.summary);
        setVulnerabilities(response.data.data.vulnerabilities);
        })
        .catch((error)=> {
        console.error('Error fetching data:',error)
        });
    },[reportID]);
    
        

    const formattedSummary = Details.replace(/\n/g, '<br>');
    return (
        <Grid container spacing = {2} >
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: '20px', justifyContent: 'center' }}>
            <Mat.Box style={{
                padding: '30px'
            }}>
                <Mat.Box display="flex" flexDirection="column" alignItems="center" style={{padding: '20px'}}>
                    <Mat.Paper elevation={10}>
                        <Mat.Typography variant="h2" style={{padding: '20px'}}>{ReportName}</Mat.Typography> {/*Change this to the json variable for the clicked on report, will be passed in from ReportGrid as noted in comments*/}
                    </Mat.Paper>
                </Mat.Box>
                
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <Mat.Paper elevation={3} style={{padding: '20px'}}>
                        <Mat.Typography variant="overline" style={{paddingLeft: '20px', fontSize: '32px'}}>Vulnerabilities</Mat.Typography>
                        {Vulnerability("Critical")} {/* Vulnerabilities can be imported here and mapped as needed for display*/}
                        {Vulnerability("Critical")}
                        {Vulnerability("Severe")}
                        {Vulnerability("Moderate")}
                        {Vulnerability("Low")}
                        {Vulnerability()}

                        
                        </Mat.Paper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <Mat.Paper elevation={3} style={{paddingLeft: '20px'}}>
                            <Mat.Typography variant="overline" style={{paddingTop: '20px', fontSize: '32px'}}>
                                Details:
                                
                            </Mat.Typography>
                            <Mat.Typography variant="body1">
                                {Details}
                            </Mat.Typography>
                        </Mat.Paper>
                    </Grid> {/*Report details from imported and passed report_id can be displayed here */}
                </Grid>
            </Mat.Box>
        </Grid>
        <Grid item xs={12}>
         <Footer />
        </Grid>
        </Grid>
        
    );
}



function Vulnerability(vuln_category) {
    const VulnDetailsStyle = {
        paddingLeft: '50px',
        textAlign: 'left',
        paddingRight: '30px',
        paddingTop: '20px'
    }; 
    let vuln_name
    let vuln_details
    let severity
    // This function will change the colouring of the vulnerabilty based on the severity, the logic can be leveraged in later assignments for dynamic display of other relvant content
    switch (vuln_category) {
        case 'Critical':
            severity = 'red'
            break;
        case 'Severe':
            severity = 'orange'
            break;
        case 'Moderate':
            severity = 'gold'
            break;
        case 'Low':
            severity = 'LawnGreen'
            break;
        default:
            severity = 'cornflowerblue'
            break;
    } // colours can be customised as needed, additional categories can also be added as needed

    return (
    <Mat.Box style={VulnDetailsStyle}>
        <Mat.Typography variant="h4"> 
            {vuln_name || "Generic Issue"} {/*change this to a variable that can be imported from the .json report as is done in ./ReportGrid.js*/} 
        </Mat.Typography> 
        <Mat.Typography variant="overline" style={{
            fontSize: '20px', color: severity}}>
            {vuln_category || "Special"} {/*change this to a variable that can be imported from the .json report as is done in ./ReportGrid.js*/}
        </Mat.Typography>
        <Mat.Typography variant="body1"> {/* this will change based on the imported vulnerability, and retrieve specific retification information from a database*/}
            {vuln_details || "This issue results in an issue where a user can modify backend contents via specific code injection. \n You need to implement some level of input sanitisation"} {/*change this to a variable that can be imported from the .json report as is done in ./ReportGrid.js*/}
        </Mat.Typography>
        <Mat.Typography><br /></Mat.Typography>
    </Mat.Box>
    );
    
}