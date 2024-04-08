// App.js
import React from 'react';
import CustomNavbar from './compents/Navbar';
import { ThemeProvider } from './compents/ThemeContext';


function App () {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomNavbar></CustomNavbar>
      </div>
    </ThemeProvider>
  );
};

export default App;
