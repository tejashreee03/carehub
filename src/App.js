import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import './App.css';
import Navbar from './components/NavbarH'; 
import Home from './components/pages/HomePage/home';
import Auth from './components/pages/Auth/Auth';
import Reports from './components/Reports/Reports'
import Reminder from './components/Reminder/Reminder';

const theme = createTheme(); // Create your theme instance

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/auth' element={<Auth />} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/reminders" element={<Reminder/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
