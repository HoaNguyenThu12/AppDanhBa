// Navbar.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Navbar, Nav, Form, Button} from 'react-bootstrap';


function CustomNavbar (){
  const { theme, toggleTheme, language, toggleLanguage } = useContext(ThemeContext);

  function switchLanguage (){
    toggleLanguage();
  };

  function switchTheme (){
    toggleTheme();
  };
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" >
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-link active">{language === 'english' ? 'Home' : 'Trang chủ'}</Nav.Link>
            <Nav.Link href="#" className="nav-link active">{language === 'english' ? 'Product' : 'Sản phẩm'}</Nav.Link>
            <Nav.Link href="#" className="nav-link active">{language === 'english' ? 'Sale' : 'Khuyến mãi'}</Nav.Link>
            <Nav.Link href="#" className="nav-link active">{language === 'english' ? 'Contact' : 'Liên hệ'}</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Button variant="success" className="me-2" onClick={switchLanguage}>
              {language === 'english' ? 'Tiếng anh' : 'Tiếng Việt'}
            </Button>
            <Button variant="outline-primary" onClick={switchTheme}>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;