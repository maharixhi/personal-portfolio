import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github (1).svg";
import navIcon3 from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maharixhi2003/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/maharixhi"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/just_mann._/?igshid=ZGUzMzM3NWJiOQ%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
