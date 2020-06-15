//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
     MDBContainer, 
     MDBRow, 
     MDBCol, 
     MDBView,
     MDBMask
    } from "mdbreact";

//>Images
import rising from '../../../assets/rising.jpg';
import tunnels from '../../../assets/tunnels.jpg';
import waterfall from '../../../assets/waterfall.png';
import shining from '../../../assets/shining.jpg';
import cliff from '../../../assets/cliff.png';
import mirror from '../../../assets/mirror.jpg';
import houses from '../../../assets/houses.jpg';
import scape from '../../../assets/scape.jpg';
import wall from '../../../assets/spain-wall.jpg';
import fall from '../../../assets/fall.jpg';
import sweden from '../../../assets/sweden.jpg';

//>Data
const value = {
    gallery: {
        prow4: [
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={rising}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Rising</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>      
              ),
            },
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={tunnels}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Tunnels under Alcázar</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={waterfall}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Swedish Waterfall</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
                value: (
                    <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={shining}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Shining Orchestra</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                ),
              },
          ],
  
          prow3: [
            {
              value: (
                <MDBCol md="4">
                    <MDBView hover>
                        <img
                            src={cliff}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Cliff</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
              value: (
                <MDBCol md="4">
                    <MDBView hover>
                        <img
                            src={mirror}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Arabic Mirror</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
              value: (
                <MDBCol md="4">
                    <MDBView hover>
                        <img
                            src={houses}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Falunrot</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
          ], 
          
          prow42: [
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={scape}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Scape</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={wall}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Spanish Wall</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
              value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={fall}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Downfall</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
              ),
            },
            {
                value: (
                <MDBCol md="3">
                    <MDBView hover>
                        <img
                            src={sweden}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">Sweden</p>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                ),
              },
          ],
    },
  };


class Gallery extends React.Component {

  render() {
    return (
      <MDBContainer className="mt-5 p-3" >

          <h1 className="h1-reponsive blue-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">Gallery</h1>
          <MDBRow>
            {value.gallery.prow4.map((pic4, i) => {
                return (
                    <>
                    {pic4.value}
                    </>
                );
            })}
          </MDBRow>

          <MDBRow className="mt-4">
            {value.gallery.prow3.map((pic3, i) => {
                return (
                    <>
                    {pic3.value}
                    </>
                );
            })} 
          </MDBRow>

          <MDBRow className="mt-4">
            {value.gallery.prow42.map((pic42, i) => {
                return (
                    <>
                    {pic42.value}
                    </>
                );
            })}    
          </MDBRow>
      </MDBContainer >
    );
  }
}

export default Gallery;