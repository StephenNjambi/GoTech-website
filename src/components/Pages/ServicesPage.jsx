import React, { useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faRocket, faShoppingCart, faMobileAlt, faCloud, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const ServicesPage = () => {
  const containerStyles = {
    backgroundColor: "rgba(243, 244, 246, 1)",
  };

  const cardStyles = {
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "rgba(55, 65, 81, 1)",
    textAlign: 'center',
    transition: "background-color 0.3s ease-in-out",
  };

  const hoveredCardStyles = {
    backgroundColor: '#f8f9fa',
  };

  const sectionStyles = {
    marginTop: '20px',
  };

  const servicesData = [
    {
      title: "Web Design & Development",
      description: "Crafting visually stunning and functional websites that captivate your audience and drive business growth.",
      icon: faDesktop,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to enhance your online presence, attract leads, and boost conversions.",
      icon: faRocket,
    },
    {
      title: "E-Commerce Solutions",
      description: "Building robust e-commerce platforms with seamless user experiences to drive sales and increase customer satisfaction.",
      icon: faShoppingCart,
    },
    {
      title: "Mobile App Development",
      description: "Creating innovative and user-friendly mobile applications that bring your ideas to life and engage your audience.",
      icon: faMobileAlt,
    },
    {
      title: "Cloud Solutions",
      description: "Harnessing the power of cloud technology to optimize business processes, improve scalability, and enhance data security.",
      icon: faCloud,
    },
    {
      title: "AI and Machine Learning",
      description: "Integrating artificial intelligence and machine learning solutions to automate tasks, gain insights, and stay ahead in the industry.",
      icon: faRobot,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ctaStyles = {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "40px 0",
    borderRadius: "10px",
    textAlign: "center",
  };

  const ctaButtonStyles = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };


  return (
    <Container fluid className="my-0 p-4" style={containerStyles}>
       {/* CTA Section */}
       <Row className="mb-4" style={sectionStyles}>
          <Col md={12}>
            <div style={ctaStyles}>
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="mb-4">Contact us today to discuss your project and let's turn your ideas into reality.</p>
              <Button variant="light" style={ctaButtonStyles}>Contact Us</Button>
            </div>
          </Col>
        </Row>
        
      <Container>
        <h2 className="my-6 text-center mb-4">Our Services</h2>

        {/* Services Section */}
        <Row className="mb-4" style={sectionStyles}>
          {servicesData.map((service, index) => (
            <Col md={4} key={index}>
              <Card
                className={`mb-3 ${hoveredIndex === index ? 'bg-light' : ''}`}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
              >
                <Card.Body style={cardStyles}>
                  <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Sections or Creative Elements can be added here */}
        
      </Container>
       
    </Container>
  );
};

export default ServicesPage;
