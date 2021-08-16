import './IconsComponent.scss';
import React from 'react';
import { BsCamera } from "react-icons/bs";
import { Row, Col } from 'reactstrap';
import { IconContext } from "react-icons";

const IconsComponent = ({ sectionTitle }) => {

  return (
    <div>
      <Row>
        <Col>
          <div className="section-title-container mg-top">
            <h1 className="section-title">{sectionTitle}</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="container-grid mg-bottom">
          <div className="container-icons">
            <div className="container-ball-icons">
              <div className="ball-icon"></div>
              <div className="ball-icon"></div>
              <div className="ball-icon"></div>
            </div>

            <IconContext.Provider value={{ color: "#424242", size:  "2em", sytle: "opacity: 0.8"}}>
              <span> <BsCamera /> </span>
            </IconContext.Provider>
            
            <div className="container-ball-icons">
              <div className="ball-icon"></div>
              <div className="ball-icon"></div>
              <div className="ball-icon"></div>
            </div>
          </div>
        </div>
      </Row>
    </div>
    
  )
}

export default IconsComponent;