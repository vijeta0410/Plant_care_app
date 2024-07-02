import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faBell, faSearch, faTools, faRobot, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container position-relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <div className="container py-5">
        <h2 className="text-center mb-5">Your companion for plant care and gardening</h2>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            { icon: faMicroscope, title: 'Plant Disease Detection', text: 'Detect plant diseases with ease using advanced image recognition.', link: '/disease-detection', image: 'https://images.pexels.com/photos/15517921/pexels-photo-15517921/free-photo-of-plants-a-microscope-and-a-drawing-of-plants.jpeg?auto=compress&cs=tinysrgb&w=600' },
            { icon: faBell, title: 'My Plants', text: 'Track and manage your plants with notifications and reminders.', link: '/my-plants', image: 'https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=600' },
            { icon: faSearch, title: 'Recommend Plants', text: 'Find the best plants for your garden with our recommendations.', link: '/recommendations', image: 'https://images.pexels.com/photos/1005715/pexels-photo-1005715.jpeg?auto=compress&cs=tinysrgb&w=600' },
            { icon: faTools, title: 'Products', text: 'Browse and purchase the best products for your plants.', link: '/products', image: 'https://images.pexels.com/photos/4466421/pexels-photo-4466421.jpeg?auto=compress&cs=tinysrgb&w=600' },
            { icon: faLightbulb, title: 'Plant Care Tips', text: 'Discover valuable tips and advice for nurturing your plants.', link: '/community', image: 'https://images.pexels.com/photos/9724474/pexels-photo-9724474.jpeg?auto=compress&cs=tinysrgb&w=600' },
            { icon: faRobot, title: 'Chatbot', text: 'Get instant help and advice with our AI-powered chatbot.', link: '/chatbot', image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=600' },
          ].map((card, index) => (
            <div className="col" key={index}>
              <div className="card border-0 shadow-sm h-100 rounded-3">
                <img src={card.image} alt={card.title} className="card-img-top rounded-top" style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={card.icon} size="3x" className="mb-3 text-success" />
                    <h5 className="card-title text-center mb-3">{card.title}</h5>
                    <p className="card-text text-center">{card.text}</p>
                  </div>
                  <Link to={card.link} className="btn btn-success align-self-end">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-3 position-relative" style={{ backgroundColor: '#1b3306', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', zIndex: 1 }}>
        <p className="mb-0 text-light">&copy; 2024 Plant Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
