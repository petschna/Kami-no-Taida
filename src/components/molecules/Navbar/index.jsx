//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
} from "mdbreact";

// React Logo
import Logo from '../../../assets/logo-blue.png';

class Navbar extends React.Component{
    state = {
        collapseID: ""
    };

    toggleCollapse = (collapseID) => () =>
        this.setState((prevState) => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    closeCollapse = (collapseID) => () => {
        window.scrollTo(0, 0);
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    };

    render(){
        const overlay = (
        <div
            id="sidenav-overlay"
            style={{ backgroundColor: "transparent" }}
            onClick={this.toggleCollapse("mainNavbarCollapse")}
        />
        );

        const { collapseID } = this.state;
        return(
            <div>
                <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
                <MDBContainer>
                    <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                    <img src={Logo} style={{ height: "2rem", width: "2rem" }}></img>
                    <strong className="align-middle">Petschnig Schmetsching sag ich immer</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                    onClick={this.toggleCollapse("mainNavbarCollapse")}
                    />
                    <MDBCollapse
                    id="mainNavbarCollapse"
                    isOpen={this.state.collapseID}
                    navbar
                    >
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink
                                exact
                                to="/"
                                onClick={this.closeCollapse("mainNavbarCollapse")}
                            >
                                <strong>Home</strong>
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
            </div>
        );
    }
}

export default Navbar;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
