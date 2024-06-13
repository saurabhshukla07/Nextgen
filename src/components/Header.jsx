import React from 'react'
import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <div>
             <div className="nav-top">
                <div className='nav-top-content'>
                    <div className='nav-top-content-component'><img src="/assets/phone.png" alt="phone-logo" />
                    (414)857-0107
                    </div>
                    <div className='nav-top-content-component'><img src="/assets/mail.png" alt="mail-logo" />
                    yummy@bistrobliss
                    </div>
                </div>
                <div className='nav-top-logo'>
                  <img src="/assets/1 (1).png" alt="" />
                <img src="/assets/2.png" alt="" />
                <img src="/assets/3.png" alt="" />
                <img src="/assets/4.png" alt="" />
                </div>
             </div>
{/*      
             <div className="nav">
              <div className="nav-left"><img className='navbar-logo' src="/assets/japanese-food.png" alt="" /><h3>Bistro Bliss</h3></div>
              <div className="nav-right"><ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Page</li>
              <li>Contact</li></ul>
              <span >Book A Table</span>
              </div>
             </div> */}

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav">
      <Container >
        <Navbar.Brand href="#home"><span style={{display:'flex', alignItems:'center', justifyContent:'center', fontSize:'42px', fontStyle:'italic',color:'#474747'}}><img className='navbar-logo' src="/assets/japanese-food.png" alt="" />Bistro Bliss</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'8vw'}}>
            <Nav.Link href="#features" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>Menu</Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>Page</Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>Contact</Nav.Link>
          </Nav>
          <Nav className="book">
            <Nav.Link href="#" className='nav-link' >Book A Table</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default Header
