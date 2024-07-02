import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faMicroscope, faShoppingBasket, faHeart, faSeedling, faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-1" style={{ 
        background: `url('https://images.pexels.com/photos/6831697/pexels-photo-6831697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center`, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: 'cover', 
        color: '#fff' 
      }}>
        <div className="d-flex align-items-center" style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '10px', 
          borderRadius: '10px'
        }}>
          <FontAwesomeIcon icon={faSeedling} size="2x" className="me-2" />
          <h1 className="mb-0">Plant Buddy</h1>
        </div>
        <Button variant="outline-light" onClick={handleGetStarted}>
          Get Started
        </Button>
      </header>

      {/* Hero Section */}
      <section className="hero-image" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img
          src="https://images.pexels.com/photos/6831697/pexels-photo-6831697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Plant Background"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px'
        }}>
          <h1 className="display-4">"The love of gardening is a seed once sown that never dies."</h1>
          <p className="lead">Join us and make your garden thrive with Plant Buddy!</p>
          <Button variant="light" size="lg" onClick={handleGetStarted}>Get Started</Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="text-center mb-4">Why Choose Plant Buddy?</h2>
          <Row className="text-center">
            <Col md={4}>
              <FontAwesomeIcon icon={faLeaf} size="3x" className="mb-3 text-success" />
              <h4>Personalized Care</h4>
              <p>Get custom care instructions tailored to your specific plants.</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faMicroscope} size="3x" className="mb-3 text-info" />
              <h4>Disease Detection</h4>
              <p>Identify and treat plant diseases before they spread.</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faShoppingBasket} size="3x" className="mb-3 text-warning" />
              <h4>Best Products</h4>
              <p>Find the best products to keep your plants healthy and happy.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">How It Works</h2>
          <Row className="text-center">
            <Col md={4}>
              <FontAwesomeIcon icon={faSeedling} size="3x" className="mb-3 text-success" />
              <h4>Plant Identification</h4>
              <p>Use our app to identify your plants and get tailored care tips.</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faLeaf} size="3x" className="mb-3 text-success" />
              <h4>Custom Reminders</h4>
              <p>Set reminders for watering, fertilizing, and more.</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faComment} size="3x" className="mb-3 text-warning" />
              <h4>Community Support</h4>
              <p>Join our community to share tips and get advice.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <Row>
            <Col md={4}>
              <div className="testimonial p-4 rounded shadow-sm mb-4 bg-white">
                <p className="text-center"><FontAwesomeIcon icon={faHeart} size="2x" className="text-danger mb-3" /></p>
                <p>"Plant Buddy has transformed the way I take care of my plants. The disease detection feature is a game-changer!"</p>
                <p className="text-end"><strong>- Jane Doe</strong></p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial p-4 rounded shadow-sm mb-4 bg-white">
                <p className="text-center"><FontAwesomeIcon icon={faHeart} size="2x" className="text-danger mb-3" /></p>
                <p>"I love the reminders for watering my plants. My green friends have never been healthier!"</p>
                <p className="text-end"><strong>- John Smith</strong></p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial p-4 rounded shadow-sm mb-4 bg-white">
                <p className="text-center"><FontAwesomeIcon icon={faHeart} size="2x" className="text-danger mb-3" /></p>
                <p>"The community forum is fantastic. I’ve learned so much from other plant enthusiasts."</p>
                <p className="text-end"><strong>- Emily Brown</strong></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', backdropFilter: 'blur(5px)' }}>
        <p>&copy; 2024 Plant Buddy. All rights reserved. Made with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Plant Lovers</p>
      </footer>
    </div>
  );
};

export default LandingPage;
