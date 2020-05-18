//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
  } from 'mdbreact';

  import backgroundImage from '../../../assets/look-through.jpg';

class Hero extends React.Component{
    state = {
    collapsed: false
    };

    handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
        collapsed: !collapsed
    });
    };

    componentDidMount() {
    document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
    }

    render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: '4rem' };
    const overlay = (
        <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
        />
    );
    return (
        <div id='minimalistintro'>
        <MDBView src={backgroundImage}>
            <MDBMask overlay="pink-light" className='rgba-black-light' />
            <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
            >
            <MDBRow>
                <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    Angelo Petschnig
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                    <strong>Photography & design</strong>
                </h5>
                <MDBBtn outline color='white'>
                    portfolio
                </MDBBtn>
                <MDBBtn outline color='white'>
                    About me
                </MDBBtn>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </MDBView>
        </div>
    );
  }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
