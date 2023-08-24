import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import the Delete icon
import useStyles from './ReportStyle'; // Import the styles
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';


const Reports = () => {
  const classes = useStyles();
  
  const[bool,SetBool]=useState(false)             //sidebar

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }


  const [addedReports, setAddedReports] = useState([]);

  const handleAddReport = () => {
    // Simulate adding a new report object
    const newReport = {
      id: addedReports.length + 1,
      title: `Report ${addedReports.length + 1}`,
      content: `This is the content of Report ${addedReports.length + 1}`,
    };
    setAddedReports([...addedReports, newReport]);
  };

  const handleDeleteReport = (reportId) => {
    const updatedReports = addedReports.filter((report) => report.id !== reportId);
    setAddedReports(updatedReports);
  };

  return (
    <>
    <Sidebar hide={bool && "55px"} active="active"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <Container className={classes.container}>
    
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Reports
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddReport}>
            Add Report
          </Button>
        </CardContent>
      </Card>

      <Divider className={classes.divider} />

      {addedReports.map((report) => (
        <Card key={report.id} className={classes.card}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {report.title}
            </Typography>
            <Typography>{report.content}</Typography>
            <IconButton color="secondary" onClick={() => handleDeleteReport(report.id)}>
              <Delete />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default Reports;
