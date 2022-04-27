import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import db from "../firebase/config";
import { Col, Container, Row } from "reactstrap";

function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("project").onSnapshot((snapshot) =>
      setProjects(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <Container>
        <Row>
          {projects.map((item, index) => (
            <Col md="12" key={index}>
              <div className="projectCard">
                <img
                  src={item.image}
                  className="projectImage"
                  rel="noreferrer"
                />
                <div className="cardTitles">
                  <div className="projectAbout">
                    <h3 className="projectName">{item.projectName}</h3>
                    <p className="projectDesc">{item.projectDesc}</p>
                  </div>
                  <div className="projectButtons">
                    <a href={item.code} className="buttons" >
                      Source <GitHubIcon />
                    </a>
                    <a href={item.demo} className="buttons" >
                      Demo <LinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Project;
