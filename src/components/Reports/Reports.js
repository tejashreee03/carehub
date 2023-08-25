import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Collapse,
  TextField,

} from '@mui/material';
import useStyles from './ReportStyle'; // Import the styles
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { ExpandMore,Share, GetApp, Visibility,Delete } from '@mui/icons-material';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import './Reports.css';
import DatePicker from './Date';

const Reports = () => {
  const classes = useStyles();
  
  const [bool, SetBool] = useState(false); // Sidebar

  function handleMenu() {
    bool ? SetBool(false) : SetBool(true);
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Sidebar hide={bool && "55px"} active="active" />
      <Navbar
        menu={handleMenu}
        style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}
      />
      <section id="content" style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}>
        <main className='charts'>
          <div className="head-title">
            <div className="left">
              <h1>Reports</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                  <a className="active" href="#">Reports</a>
                </li>
              </ul>
            </div>
          </div>

          <Button className={classes.submitButton} variant="contained" color="primary">
            New collections
          </Button>

          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <div className="card-header">
                <Typography variant="h6">Hospital A Reports</Typography>
                <IconButton
                  className="expand-icon"
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMore />
                </IconButton>
              </div>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <div className='card-all'>
                  <div className='card-items'>
                  <Typography variant="body1">
                   Report 1
                  </Typography>
                  <div className='icon-buttons'>
                      <IconButton>
                        <Share />
                      </IconButton>
                      <IconButton>
                        <GetApp />
                      </IconButton>
                      <IconButton>
                        <Visibility />
                      </IconButton>
                      <IconButton>
                        <Delete />
                      </IconButton>
                    </div>
                    </div>
                    <div className='card-new'>
                      
                      <div className='card-data'>
                      <input type="text" id="report-name" placeholder="Report Name" />
                      <input type="date" id="date-picker" />
                      <input type="file" id="file-input" />
                      
                      </div>
                      <div className='card-add'>
                        <Button className={classes.add} variant="contained">
                          Add Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        </main>
      </section>
    </>
  );
};

export default Reports;
