//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import {
  Header,
} from "../../organisms";

//> Images
// Image of someone coding
import Projects from "../../../assets/content/projects.jpg";
// Carboard Image left
import Profile from "../../../assets/serious.png";
// Cardboard Image Right
import Profile2 from "../../../assets/chill.png";
// Image of the Steam Logo
import Steam from "../../../assets/steam.png";
// Image of the Lol Logo
import Lol from "../../../assets/lol.png";

//> CSS
import "./HomePage.scss";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="5"
                className="mx-auto float-none white py-2 px-2 border"
              >
                <MDBCardBody className="text-center">

                    <div class="card card-cascade wider">

                    <div class="view view-cascade overlay">
                      <img class="card-img-top" src={Profile} alt="Profile"></img>
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <div class="card-body card-body-cascade text-center">


                      <h4 class="blue-text pb-2"><strong>Work</strong></h4>

                      <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam. </p>

                      <a class="px-2 fa-lg li-ic"><i class="fab fa-github"></i></a>

                      <a class="px-2 fa-lg tw-ic"><i class="fab fa-react"></i></a>

                      <a class="px-2 fa-lg fb-ic"><i class="fab fa-linkedin-in"></i></a>

                    </div>
                    </div>

                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="blue-gradient border nav-link border-light rounded mr-1"
                      href="https://angelo.world"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap white-text" className="mr-2" />
                      <span className="font-weight-bold white-text">School Projects</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>

              <MDBCol
                md="5"
                className="mx-auto float-none white py-2 px-2 border"
              >
                <MDBCardBody className="text-center">

                    <div class="card card-cascade wider">

                    <div class="view view-cascade overlay">
                      <img class="card-img-top" src={Profile2} alt="Profile"></img>
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>

                    <div class="card-body card-body-cascade text-center">


                      <h4 class="blue-text pb-2"><strong>Free Time</strong></h4>

                      <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam. </p>

                      <a class="px-2 fa-lg li-ic"><i class="fab fa-adobe"></i></a>

                      <a class="px-2 fa-lg fb-ic">
                        <i class="fab">
                          <img src={Steam} height="20" width="20"></img>
                          </i>
                      </a>

                      <a class="px-2 fa-lg fb-ic">
                        <i class="fab">
                          <img src={Lol} height="20" width="20"></img>
                          </i>
                      </a>

                    </div>
                    </div>

                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="blue-gradient border nav-link border-light rounded mr-1"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap white-text" className="mr-2" />
                      <span className="font-weight-bold white-text">Official Documentation</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>

            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />
                <MDBRow id="categories" className="justify-content-center">
                  <MDBCol md="4">
                    <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src={Projects}
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="github"
                            brand
                            className="dark-text pr-2"
                          />
                          <strong>GitHub</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Find more of our amazing work and templates on GitHub!
                        </MDBCardText>
                        <a 
                        className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                        href="https://github.com/petschna"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          More
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
