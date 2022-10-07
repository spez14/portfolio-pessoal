import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Projetos de Sistema de concessionária",
            description: "Sistema PHP",
            imgUrl: projImg1,
        },
        {
            title: "Jogo Snake em C#",
            description: "Jogo que desenvolvi na linguagem C# com o objetivo de afiar meus conhecimentos.",
            imgUrl: projImg2,
        },
        {
            title: "Pokedex",
            description: "Projeto desenvolvido sob a orientação do Manual do Dev onde utilizei HTML, CSS e JavaScript para criar uma Pokédex, objeto muito famoso da ainda mais famosa franquia Pokémon.",
            imgUrl: projImg3,
        },
        {
            title: "integracao entre excel e forms ",
            description: "Neste pequeno projeto, com o objetivo de atualizar através de um formulário os dados contidos em uma planilha do Excel, realizei a integração desta e do famoso editor de planilhas com uma aplicação do Windows Forms fazendo uso da linguagem C# e do Visual Studio.",
            imgUrl: projImg1,
        },
        {
            title: "Site Doutor Estranho no Multiverso da Loucura",
            description: "Site que desenvolvi reproduzindo o site criado pelo professor Fernando Leonid",
            imgUrl: projImg2,
        },
        {
            title: "Calculadora Python",
            description: "Calculadora que desenvolvi em Python.",
            imgUrl: projImg3,
        },
        
    ]
    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col>
              <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <h2>Projetos</h2>
                <p>Abaixo estão alguns de meus projetos.</p>
                </div>}
                </TrackVisibility>
                <Tab.Container id ="projects-tabs" defaultActivKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                     key={index}
                                     {...project}
                                     />
                                )
                            })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Em breve mais atualizações!
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        Em breve mais atualizações!
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}