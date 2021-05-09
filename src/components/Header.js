import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from './Header.module.css';
import { Nav, Navbar } from 'react-bootstrap';

export class Header extends Component {

  render() {
    return(
    <Navbar className={styles.AppHeader}>
        <Navbar.Brand>
            <div className={styles.AppLog}>
                <img src={logo} alt="logo" />
            </div>
        </Navbar.Brand>
        <Nav className="justify-content-end ml-auto" activeKey="/home">
            <Nav.Item>
                <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Book</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Join our team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled">
                    Sign Up
                </Nav.Link>
            </Nav.Item>
        </Nav>
      </Navbar>
    )
  }

}