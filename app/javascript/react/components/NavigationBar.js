import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { SocialIcon } from 'react-social-icons';


const NavLink = ({ exact, to, eventKey, children }) =>
  <LinkContainer exact={exact} to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>;

class NavigationBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
          number: "613-242-0725"
          }
        }

    render(){
       return(

         <div className="full-nav">
          <div className="info-p"><p className="follow-us">Follow us</p>
          <a  href="http://www.facebook.com" target="_blank" className="fab fa-facebook-square mt-4 fa-2x"></a>
          <a  href="http://www.instagram.com" target="_blank" className="fab fa-instagram mt-4 fa-2x"></a>
            <i className="fas fa-phone" ><a href={`tel:${this.state.number}`}>{this.state.number}</a></i>
          </div>

          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link className="logo" to="home">Sweet-Cakes</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight >
                <NavLink eventKey={1} componentClass={Link} href="/home" to="/home"><i className="fas fa-home"></i>Home</NavLink>
                <NavLink eventKey={2} componentClass={Link} href="/photo" to="/photo"><i className="far fa-images"></i>Photo</NavLink>
                <NavLink eventKey={3} componentClass={Link} href="/pricing" to="/pricing"><i className="fas fa-dollar-sign"></i>Pricing</NavLink>
                <NavLink eventKey={4} componentClass={Link} href="/contact" to="/contact"><i className="far fa-address-book"></i>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
         </div>

        )
  }
}

export default NavigationBar;
