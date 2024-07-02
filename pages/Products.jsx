import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/products/get-products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="container mt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '15px' }}>
        <h1 className="mb-4 text-center">Gardening Tools</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img
                  src={product.url}
                  className="card-img-top"
                  alt={product.product_name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.use}</p>
                  </div>
                  <button
                    className="btn btn-success align-self-end"
                    onClick={() => handleButtonClick(product.link)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center mt-5">
            <p>No products available</p>
            <FontAwesomeIcon icon={faSeedling} size="5x" className="text-success" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
