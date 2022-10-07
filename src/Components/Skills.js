import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                          <div className="skill-bx">
                              <h2>
                                Habilidades  
                              </h2>
                              <p>Abaixo coloquei algumas de minhas habilidades.<br></br> Todas desenvolvidas com dedicação sempre buscando a qualidade dos projetos.</p>
                              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                  <div className="item">
                                      <img src={meter1} alt="image" />
                                      <h5>Desenvolvimento Web</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter2} alt="image" />
                                      <h5>Identidade de marca</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter3} alt="image" />
                                      <h5>Design de logo</h5>
                                  </div>
                                  <div className="item">
                                      <img src={meter1} alt="image" />
                                      <h5>Web Development</h5>
                                  </div>
                              </Carousel>
                          </div>
                          </div>}
                      </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
     )
}