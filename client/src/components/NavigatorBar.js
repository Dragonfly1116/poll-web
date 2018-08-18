import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import  { NavLink } from 'react-router-dom'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: (localStorage.getItem('token') !== null) ? true : false
    };
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: (localStorage.getItem('token') !== null) ? true : false
    })
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout = () => {
    localStorage.removeItem('token');   
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    const { isLoggedIn } = this.state
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
              (this.props.isLoggedIn) ? (
                <div>
                  <NavItem>
                      <NavLink to="/" onClick={this.props.logout}>
                        Logout
                      </NavLink>
                  </NavItem>
                </div>)
              :
              ( <div>
                <NavItem>
                    <NavLink to="/signup">
                      SignUp
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/signin">
                      SignIn
                    </NavLink>
                </NavItem>
                </div>)
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}