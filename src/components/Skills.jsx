import { Container, Row, Col, Carousel } from "react-bootstrap";

// Import your logos (adjust paths as needed)
import javaLogo from "../assets/img/logos/java-logo.png";
import phpLogo from "../assets/img/logos/php-logo.png";
import jsLogo from "../assets/img/logos/js-logo.png";
import reactLogo from "../assets/img/logos/react-logo.png";
import nodeLogo from "../assets/img/logos/nodejs-logo.png";
import springLogo from "../assets/img/logos/spring-logo.png";
import mongoLogo from "../assets/img/logos/mongodb-logo.png";

import gitLogo from "../assets/img/logos/git-logo.png";
import mysqlLogo from "../assets/img/logos/mysql-logo.png";
import figmaLogo from "../assets/img/logos/figma-logo.png";
import jiraLogo from "../assets/img/logos/jira-logo.png";

import colorSharp from "../assets/img/color-sharp-dark-green.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My experience covers a wide range of technologies, allowing me to build robust, 
                scalable applications from front to back.
                <br/>
                Here’s a breakdown of my top skills...
              </p>
              
              <Carousel indicators={false} interval={null}>
                {/* Slide 1: Languages & Frameworks */}
                <Carousel.Item>
                  <h3 className="mt-4">Languages & Frameworks</h3>
                  <Row className="mt-3 justify-content-center">
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={javaLogo} alt="Java" style={{ width: '50px', height: 'auto' }}/>
                      <p>Java</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={phpLogo} alt="PHP" style={{ width: '50px', height: 'auto' }}/>
                      <p>PHP</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={jsLogo} alt="JavaScript" style={{ width: '50px', height: 'auto' }}/>
                      <p>JavaScript</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={reactLogo} alt="React" style={{ width: '50px', height: 'auto' }}/>
                      <p>React</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={nodeLogo} alt="Node.js" style={{ width: '50px', height: 'auto' }}/>
                      <p>Node.js</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={springLogo} alt="Spring Boot" style={{ width: '50px', height: 'auto' }}/>
                      <p>Spring Boot</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={mongoLogo} alt="MongoDB" style={{ width: '50px', height: 'auto' }}/>
                      <p>MongoDB</p>
                    </Col>
                  </Row>
                </Carousel.Item>

                {/* Slide 2: Tools */}
                <Carousel.Item>
                  <h3 className="mt-4">Tools</h3>
                  <Row className="mt-3 justify-content-center">
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={gitLogo} alt="Git" style={{ width: '50px', height: 'auto' }}/>
                      <p>Git</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={mysqlLogo} alt="MySQL" style={{ width: '50px', height: 'auto' }}/>
                      <p>MySQL</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={figmaLogo} alt="Figma" style={{ width: '50px', height: 'auto' }}/>
                      <p>Figma</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center mb-4">
                      <img src={jiraLogo} alt="Jira" style={{ width: '50px', height: 'auto' }}/>
                      <p>Jira</p>
                    </Col>
                  </Row>
                </Carousel.Item>

                {/* Slide 3: Soft Skills */}
                <Carousel.Item>
                  <h3 className="mt-4">Soft Skills</h3>
                  <ul className="mt-3">
                    <li>Problem-Solving</li>
                    <li>Teamwork (SCRUM)</li>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                    <li>Critical Thinking</li>
                    <li>Effective Communication</li>
                  </ul>
                </Carousel.Item>

                {/* Slide 4: Languages */}
                <Carousel.Item>
                  <h3 className="mt-4">Languages</h3>
                  <ul className="mt-3">
                    <li>Spanish (Native)</li>
                    <li>English (Fluent)</li>
                  </ul>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
