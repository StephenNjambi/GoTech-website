import React from 'react';
import '../assets/css/About.css'

const About = () => {
  return (
    <div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive, by the way.</p>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        <TeamMember
          image="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
          name="Jane Doe"
          title="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="jane@example.com"
        />
        <TeamMember
          image="/w3images/team2.jpg"
          name="Mike Ross"
          title="Art Director"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="mike@example.com"
        />
        <TeamMember
          image="/w3images/team3.jpg"
          name="John Doe"
          title="Designer"
          description="Some text that describes me lorem ipsum ipsum lorem."
          email="john@example.com"
        />
      </div>
    </div>
  );
};

const TeamMember = ({ image, name, title, description, email }) => {
  return (
    <div className="column">
      <div className="card">
        <img src={image} alt={name} style={{ width: '100%' }} />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{title}</p>
          <p>{description}</p>
          <p>{email}</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
