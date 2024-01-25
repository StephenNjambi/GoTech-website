import React from "react";
import  { useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTrail, useSpring, animated } from 'react-spring';


// Sample images (replace with actual image URLs)
const ceoImage = 'https://cdn.pixabay.com/photo/2019/12/05/13/09/business-4675105_640.png';
const managerImage = 'https://imgs.search.brave.com/xdRdt1wk_2bD2xCOZHeWfGggOOn-I8Ap-DXjipOwsZ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/OTA3NzU1OC9waG90/by9sZWFkLXlvdXJz/ZWxmLXRvLWEtbGlm/ZS1vZi1zdWNjZXNz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1PUVpQU25NMUVx/LTRYeDhieEpFOEtR/NW9sSkZmUndfWU1j/MjlhUTBBdTZVPQ';
const productChampionImage = 'https://imgs.search.brave.com/MNDMckCmZR5vt6WJpr2QjrJVfsCpPmfdiSsTAPDvkn8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1idXNp/bmVzc21hbi13aXRo/LXRpZV8xMDk4LTI4/NjcuanBnP3NpemU9/NjI2JmV4dD1qcGc';

const AboutPage = () => {
  const cardStyles = {
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "rgba(55,65,81,1)"
  };

  const containerStyles = {
    backgroundColor: "rgba(243,244,246,1)"
  };

  const whiteCardStyles = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "rgba(55,65,81,1)"
  };

  const data = [
    {
      title: "Our Vision",
      text:
        "To be the leading provider of innovative and effective business solutions, empowering businesses to thrive in the digital era.",
      color: "text-primary"
    },
    {
      title: "Our Mission",
      text:
        "We are dedicated to delivering tailored and cutting-edge website solutions that drive growth, enhance user experiences, and exceed client expectations.",
      color: "text-warning"
    },
    {
      title: "Our Values",
      text:
        "Integrity, Innovation, Collaboration, Customer-Centricity, and Excellence are at the core of everything we do. We are committed to creating lasting value for our clients and fostering a culture of continuous improvement.",
      color: "text-success"
    },
  ];

  const trail = useTrail(data.length, {
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 1000, friction: 100 },
    delay: 500,
  });


   // Animation for the Our Team section
   const [scrollProps, setScrollProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(100px)",
  }));

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the value as needed to trigger the animation at the desired scroll position
      const scrollTrigger = window.innerHeight / 1.5;

      if (window.scrollY > scrollTrigger) {
        setScrollProps({
          opacity: 1,
          transform: "translateX(0)",
        });
      } else {
        setScrollProps({
          opacity: 0,
          transform: "translateX(100px)",
        });
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollProps]);


  return (
    <>
      <Container fluid className="my-0 p-4" style={containerStyles}>
        <Container>
          <h2 className="my-6 text-center mb-4">Our Vision, Mission, and Values</h2>
          {trail.map((props, index) => (
            <animated.div key={index} style={props}>
              <Row className="mb-4 text-center">
                <Col>
                  <Card style={{ ...whiteCardStyles, ...cardStyles }}>
                    <Card.Body>
                      <h3 className={data[index].color}>{data[index].title}</h3>
                      <p className="text-secondary">{data[index].text}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </animated.div>
          ))}
        </Container>
      </Container>

      {/* CTA Section */}
      <Container fluid className="my-0 p-4">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mt-5 text-center">Meet Our Team</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Our Team Section with Animation */}
      <Container className="mt-10">
        <animated.div style={scrollProps}>
        <Row className="mb-4">
          <Col md={4} className="d-flex">
            <Card className="flex-fill">
              <Card.Img variant="top" src={ceoImage} alt="CEO" />
              <Card.Body className="flex-fill d-flex flex-column">
                <Card.Title>CEO</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Name:</strong> Dr. Julie Morgan<br />
                    <strong>Education:</strong> PHD in Business Administration<br />
                    <strong>Experience:</strong> Over 10 years in executive roles<br />
                    <strong>Expertise:</strong> Strategic Planning, Leadership, Business Development
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="flex-fill">
              <Card.Img variant="top" src={managerImage} alt="Manager" />
              <Card.Body className="flex-fill d-flex flex-column">
                <Card.Title>Manager</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Name:</strong> Jane Smith<br />
                    <strong>Education:</strong> Bachelor's in Management<br />
                    <strong>Experience:</strong> 8 years in managerial roles<br />
                    <strong>Expertise:</strong> Team Leadership, Project Management, Communication
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="flex-fill">
              <Card.Img variant="top" src={productChampionImage} alt="Product Champion" />
              <Card.Body className="flex-fill d-flex flex-column">
                <Card.Title>Product Champion</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Name:</strong> Alex Johnson<br />
                    <strong>Education:</strong> Master's in Product Management<br />
                    <strong>Experience:</strong> 7 years in product development<br />
                    <strong>Expertise:</strong> Product Strategy, Innovation, User Experience
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </animated.div>
      </Container>
    </>
  );
};

export default AboutPage;
