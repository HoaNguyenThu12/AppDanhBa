// App.js
import React, { useContext } from 'react';
import CustomNavbar from './compents/Navbar';
import { ThemeProvider } from './compents/ThemeContext';
import { ThemeContext } from './compents/ThemeContext';


function App () {
  const { theme} = useContext(ThemeContext);
  return (
    <ThemeProvider bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg">
      <div className="App">
        <CustomNavbar></CustomNavbar>
      </div>
    </ThemeProvider>
  );
};

export default App;
