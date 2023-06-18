// Import necessary dependencies
import React from 'react';
import "./CustomersSay.css";
import girl from "../../Assets/Boy.png";
import boy from "../../Assets/Girl.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CustomersSay = () => {
  return (
    <div className="container testimonial">
        <h2 className="title pt-5">Find out what our customers say</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img src={girl} className="rounded-circle mr-2" width="50" height="50" alt="Customer Image" />
                <div>
                  <h5 className="mb-0">John Doe</h5>
                  <span className="text-muted">New York, USA</span>
                </div>
              </div>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque auctor metus, vitae commodo nisi eleifend eu. Integer non nulla urna.</p>
              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-muted" />
                </div>
                <span className="text-muted">4.0</span>
              </div>
            </div>
          </div>
        </div>
        

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img src={boy} className="rounded-circle mr-2" width="50" height="50" alt="Customer Image" />
                <div>
                  <h5 className="mb-0">Jane Smith</h5>
                  <span className="text-muted">London, UK</span>
                </div>
              </div>
              <p className="card-text">Vivamus ultrices, tortor et iaculis volutpat, odio sapien posuere elit, nec finibus tortor dolor vitae dolor. Curabitur viverra, purus a imperdiet elementum.</p>
              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-muted" />
                  <FontAwesomeIcon icon={faStar} className="text-muted" />
                </div>
                <span className="text-muted">3.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img src={boy} className="rounded-circle mr-2" width="50" height="50" alt="Customer Image" />
                <div>
                  <h5 className="mb-0">Jane Smith</h5>
                  <span className="text-muted">London, UK</span>
                </div>
              </div>
              <p className="card-text">Vivamus ultrices, tortor et iaculis volutpat, odio sapien posuere elit, nec finibus tortor dolor vitae dolor. Curabitur viverra, purus a imperdiet elementum.</p>
              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-muted" />
                  <FontAwesomeIcon icon={faStar} className="text-muted" />
                </div>
                <span className="text-muted">3.0</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add more customer testimonials as needed */}
        
      </div>
    </div>
  );
};

export default CustomersSay;
