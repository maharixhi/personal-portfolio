import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Programmer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Maharishi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Programmer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a third-year student pursuing B.Tech degree in CSE at Samrat Ashok Technological Institute. With a deep passion for web development and design, I've immersed myself in the world of technology, problem-solving, and entrepreneurship.<br />
                    My academic journey has been driven by a strong focus on web development and competitive programming. In the realm of DSA, I have successfully tackled over 200 challenging problems on various platforms, honing my problem-solving skills using C++.<br />
                    I am an active member of the Entrepreneurship Cell at our college, where I contribute as a part of the technical team. This involvement has provided me with insights into the practical application of technology in real-world scenarios and the opportunity to work collaboratively on innovative projects.<br />
                    I am enthusiastic about web development and have hands-on experience working with technologies such as React, Node.js, JavaScript, HTML, and CSS. I've crafted Few web projects.<br />
                    As I continue my B.Tech program and explore the dynamic field of computer science and engineering, I am excited to embrace new challenges and opportunities. My goal is to leverage my skills, experiences, and determination to make a positive impact in the world of web development and beyond.<br />
                    Thank you for visiting my portfolio, and feel free to reach out if you'd like to connect or collaborate on exciting projects.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
