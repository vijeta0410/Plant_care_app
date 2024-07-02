import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const TipsPage = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/tips/tips');
        setTips(response.data.tips);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <p className="text-danger">Error loading tips: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Plant Care Tips</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {tips.map((tip, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow">
              <img src={tip.url} className="card-img-top" alt={tip.title} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title"><FontAwesomeIcon icon={faLightbulb} className="text-success me-2" />{tip.title}</h5>
                <p className="card-text">{tip.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsPage;
