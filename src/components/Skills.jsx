import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
  const [hasAnimated, setHasAnimated] = useState(false);

  const skillsData = {
    languages: [
      { name: "Java", logo: javaLogo, level: 90 },
      { name: "JavaScript", logo: jsLogo, level: 85 },
      { name: "PHP", logo: phpLogo, level: 80 },
    ],
    frameworks: [
      { name: "React", logo: reactLogo, level: 88 },
      { name: "Node.js", logo: nodeLogo, level: 82 },
      { name: "Spring Boot", logo: springLogo, level: 85 },
    ],
    databases: [
      { name: "MongoDB", logo: mongoLogo, level: 80 },
      { name: "MySQL", logo: mysqlLogo, level: 85 },
    ],
    tools: [
      { name: "Git", logo: gitLogo, level: 90 },
      { name: "Figma", logo: figmaLogo, level: 75 },
      { name: "Jira", logo: jiraLogo, level: 80 },
    ]
  };

  const SkillCard = ({ skill, delay }) => (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <TrackVisibility once>
        {({ isVisible }) => (
          <div 
            className={`skill-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
          >
            <div className="skill-icon">
              <img src={skill.logo} alt={skill.name} />
            </div>
            <h5 className="skill-name">{skill.name}</h5>
            <div className="skill-level">
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: 'width 1.5s ease-in-out 0.5s'
                  }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );

  const SkillCategory = ({ title, skills, startDelay = 0 }) => (
    <div className="skill-category mb-5">
      <TrackVisibility once>
        {({ isVisible }) => (
          <h3 className={`category-title ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
            {title}
          </h3>
        )}
      </TrackVisibility>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            delay={startDelay + (index * 100)}
          />
        ))}
      </Row>
    </div>
  );

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility once>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={`skill-bx ${hasAnimated ? 'animate__animated animate__fadeIn' : ''}`}>
                    <div className="skill-header">
                      <h2>Skills & Technologies</h2>
                      <p className="skill-description">
                        My expertise spans across modern technologies and frameworks. 
                        I'm passionate about building scalable applications and 
                        continuously learning new technologies to deliver the best solutions.
                      </p>
                    </div>
                    
                    <div className="skills-content">
                      <SkillCategory 
                        title="Programming Languages" 
                        skills={skillsData.languages}
                        startDelay={200}
                      />
                      
                      <SkillCategory 
                        title="Frameworks & Libraries" 
                        skills={skillsData.frameworks}
                        startDelay={400}
                      />
                      
                      <SkillCategory 
                        title="Databases" 
                        skills={skillsData.databases}
                        startDelay={600}
                      />
                      
                      <SkillCategory 
                        title="Tools & Platforms" 
                        skills={skillsData.tools}
                        startDelay={800}
                      />
                    </div>

                    <div className="soft-skills-section">
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <div className={`soft-skills ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
                            <h3>Core Competencies</h3>
                            <Row>
                              <Col md={6}>
                                <ul className="skills-list">
                                  <li>Full-Stack Development</li>
                                  <li>Problem-Solving & Debugging</li>
                                  <li>Agile Methodologies (SCRUM)</li>
                                </ul>
                              </Col>
                              <Col md={6}>
                                <ul className="skills-list">
                                  <li>Team Collaboration</li>
                                  <li>Performance Optimization</li>
                                  <li>Clean Code Practices</li>
                                </ul>
                              </Col>
                            </Row>
                          </div>
                        )}
                      </TrackVisibility>
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
