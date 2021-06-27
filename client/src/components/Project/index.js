import React from "react";
import Col from "react-bootstrap/Col";


function Project({project}){

  return (
    <Col md={6}>
      <h3>{project.name}</h3>
      <p> <span style={{fontWeight: 'bold'}}>Client: </span> {project.client}</p>
      <p> <span style={{fontWeight: 'bold'}}>Contact: </span> {project.contact}</p>
      <img
        src={require("../../images" + project.image)}
        alt={project.name}
        className="projectScreenshots img-fluid rounded"></img>


      <p>Learn more <a href={project.details}> details </a>  or visit <a href={project.more}> Project's Website</a> </p>
    </Col>

  )
} 

export default Project;