// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHeart, faSun, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const MotivationPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: '30px',
          borderRadius: '15px',
          maxWidth: '800px',
        }}
      >
        <h1 className="mb-4 display-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Grow Plants, Grow Life</h1>
        <p className="lead mb-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Plants not only add beauty to our surroundings but also bring numerous health benefits.
          They purify the air, reduce stress, and create a calming environment. Let's make our
          world greener and healthier by planting more trees and nurturing our green companions.
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <motion.div className="card h-100 text-dark shadow-lg" variants={cardVariants}>
              <div className="card-body">
                <FontAwesomeIcon icon={faLeaf} size="3x" className="text-success mb-3" />
                <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Health Benefits</h5>
                <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                  Plants can reduce stress, improve air quality, and boost your mood. Enjoy the health benefits by growing plants at home.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6 mb-4">
            <motion.div className="card h-100 text-dark shadow-lg" variants={cardVariants}>
              <div className="card-body">
                <FontAwesomeIcon icon={faHeart} size="3x" className="text-danger mb-3" />
                <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Spread Love</h5>
                <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                  Share the joy of planting with your loved ones. Plants make wonderful gifts that grow with your affection.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6 mb-4">
            <motion.div className="card h-100 text-dark shadow-lg" variants={cardVariants}>
              <div className="card-body">
                <FontAwesomeIcon icon={faSun} size="3x" className="text-warning mb-3" />
                <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Connect with Nature</h5>
                <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                  Gardening is a great way to reconnect with nature. Feel the earth, water the plants, and watch them grow.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6 mb-4">
            <motion.div className="card h-100 text-dark shadow-lg" variants={cardVariants}>
              <div className="card-body">
                <FontAwesomeIcon icon={faSeedling} size="3x" className="text-primary mb-3" />
                <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Start Small</h5>
                <p className="card-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                  You don’t need a big garden to start. Begin with a small pot on your window sill and nurture your plant as it grows.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <button
          className="btn btn-success btn-lg mt-4"
          onClick={() => window.location.href='/home'}
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem' }}
        >
          Get Started with Planting
        </button>
      </motion.div>
    </div>
  );
};

export default MotivationPage;
