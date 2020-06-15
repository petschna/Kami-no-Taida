//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer
  } from 'mdbreact';

//> Images
import backgroundImage from '../../../assets/look-through.jpg';


//> Data
const value = {
    header: {
        pic: backgroundImage,
        f_title: "Angelo Petschnig",
        s_title: "Photography & design",
        f_link: "Portfolio",
        f_href: "https://github.com/petschna",
        s_link: "About ME",
        s_href: "https://www.erebos.xyz/",
    },
};

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
        <div id='about'>
        <MDBView src={value.header.pic}>
            <MDBMask overlay="pink-light" className='rgba-black-light' />
            <MDBContainer
                className='d-flex justify-content-center align-items-center'
                style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                >         
                <MDBRow>
                    <MDBCol md='12' className='mb-4 white-text text-center'>
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5'>
                    {value.header.f_title}
                    </h1>
                    
                    <hr className='hr-light my-4' />
                    <h5 className='text-uppercase mb-4 white-text '>
                        <strong>{value.header.s_title}</strong>
                    </h5>
                    <MDBBtn outline color='white' href={value.header.f_href}>
                    {value.header.f_link}
                    </MDBBtn>
                    <MDBBtn outline color='white' href={value.header.s_href}>
                    {value.header.s_link}
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
