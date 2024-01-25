import React from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactsPage = () => {
  const containerStyles = {
    backgroundColor: "rgba(243, 244, 246, 1)",
  };

  const cardStyles = {
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "rgba(55, 65, 81, 1)",
    backgroundColor: 'white'
  };

  const sectionStyles = {
    marginTop: '20px',
  };

  const data = [
    {
      title: "Sales Department",
      description: "For inquiries related to our products and services.",
      contact: "sales@example.com",
    },
    {
      title: "Support Team",
      description: "If you need assistance or have technical questions.",
      contact: "support@example.com",
    },
    {
      title: "General Inquiries",
      description: "For general questions or information.",
      contact: "info@example.com",
    },
  ];

  const locationData = {
    name: "Your Company Name",
    address: "123 Main Street, Cityville, State, 12345",
    phone: "123-456-7890",
    email: "info@yourcompany.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-73.987654!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM0JzM2LjIiTiA3M8KwMzgnMjQuNSJX!5e0!3m2!1sen!2sus!4v1234567890123"
  };

  return (
    <Container fluid className="my-0 p-4" style={containerStyles}>
      <Container>
        <h2 className="my-9 text-center mb-20">Contact Us</h2>
        <Row className="mb-4">
          <Col md={6}>
            <div style={{ ...cardStyles }}>
              <h3>Get in Touch</h3>
              <p>
                We'd love to hear from you. Feel free to reach out with any questions, comments, or inquiries.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Form style={{ ...cardStyles }}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Additional Section for Cards */}
        <Row className="mb-4" style={sectionStyles}>
          {data.map((item, index) => (
            <Col md={4} key={index}>
              <Card style={cardStyles}>
                <Card.Body>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Contact: {item.contact}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Location Section with Map */}
        <Row className="mb-4" style={sectionStyles}>
          <Col md={12}>
            <Card style={cardStyles}>
              <Card.Body>
                <h3>Our Location</h3>
                <p>
                  <strong>{locationData.name}</strong><br />
                  {locationData.address}<br />
                  Phone: {locationData.phone}<br />
                  Email: {locationData.email}
                </p>
                {/* Embedded Map */}
                <iframe
                  title="Company Map"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style={{ border: '0' }}
                  src={locationData.mapUrl}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactsPage;
