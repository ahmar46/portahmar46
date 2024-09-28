import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import charcount from "../../Assets/Projects/charcount.png";
import FireGram from "../../Assets/Projects/FireGram.png";
import Loruki from "../../Assets/Projects/Loruki.png";
import CDC from "../../Assets/Projects/cdc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CDC}
              isBlog={false}
              title="Crep Dog Crew"
              description="Developed a fully customized Shopify store for Crepdogcrew, focusing on creating a user-friendly shopping experience with optimized performance, responsive design, and seamless integrations for payment gateways and inventory management."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://crepdogcrew.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FireGram}
              isBlog={false}
              title="FireGram"
              description="A photo Gallery Website created by me. Basically, it is an Instagram-like photo gallery app, made by using Reactjs & Firebase as it's backend, in which anyone can upload pictures."
              ghLink="https://github.com/ahmar46/FireGram_Proto"
              demoLink="https://firegram-proto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charcount}
              isBlog={false}
              title="Character Counter"
              description="As the name suggests, the character counter is a tool to count the number of characters, words, sentences, and paragraphs in your text on any type of online or social media platform."
              ghLink="https://github.com/ahmar46/Character_Counter"
              demoLink="https://ahmar46.github.io/Character_Counter/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Loruki}
              isBlog={false}
              title="Loruki - Cloud Hosting Service"
              description="This is a Cloud Based Hosting Service platform of an imaginary Company named Loruki. I just wanted to clone a cloud service website so i just given my own name create that."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://cloudloruki.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
