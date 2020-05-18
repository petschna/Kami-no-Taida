//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
} from "mdbreact";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import {
  Hero,
} from "../../molecules";

class Header extends React.Component{
    render(){
        return(
            <Hero/>
        );
    }
}

export default Header;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
