import * as Mat from '@mui/material';
import React,{ useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const ReportGrid = () => { 
  const [data,setData] = useState([]);
  const [selectedReportID,setSelectedReportID] = useState(null);
  //reportID would be parameter
  const handleReportItemClick = (reportID) => {
    setSelectedReportID(reportID);
  }

  useEffect(() => {
    //Fetch a list of reports when the compoenent mounts
    axios.get("http://localhost:8000/get_reports")//replace to actual API
      .then((response) => {
        setData(response.data);  
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  
return (
    <Mat.Box align="center" display="flex" alignItems="center">
      <Mat.Grid container spacing={5} style={{ display: 'flex', justifyContent: 'center' }}>
        {data.map((item, index) => (
          <Mat.Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Mat.Box justifyContent="center" alignContent='center'>
              <Mat.Paper elevation={5}>
                <Mat.Typography sx={{ paddingTop: '10px' }}>
                  <img
                    src={require('../../assets/images/249-2496828_computer-icons-report-royaltyfree-black-text-png-report.jpg')}
                    width="100" height="120"
                  />
                </Mat.Typography>
                <Mat.Typography>
                  <p>{item.reportName}</p>
                </Mat.Typography>
                <Mat.Typography>
                  <p>{item.uploaded_datetime}</p>
                </Mat.Typography>
                <Mat.Typography>
                  <p>{item.reportID}</p>
                </Mat.Typography>
                <Link to={`/srd/${item.reportID}}`} style={{ textDecoration: 'none' }}>
                  {/* Use Link component to navigate to the VulnsList page with reportID */}
                  {/* The URL path should match route configuration */}
                <Mat.Button sx={{ mb: 2 }} variant="outlined" color="secondary">
                  View Report
                </Mat.Button>
                </Link>
              </Mat.Paper>        
            </Mat.Box>
          </Mat.Grid>
        ))}
      </Mat.Grid>
    </Mat.Box>
  );
};
export default ReportGrid;


