import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import yum from "../../Assets/yum.png"
import Image from 'react-bootstrap/Image';
import MenuItem from '../Menu/MenuItem';
import owner from "../../Assets/owner.png"
import CustomersSay from '../Layout/CustomersSay';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="layout">
        
        <section className="bannerSection">
            <div className='sm-conatiner'>
            <div className="heroText">
            <h1>Little Lemons</h1>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations" aria-label="Reserve a table">
      <button type="button" className="btn btn-primary btn-lg">
        Reserve a table
      </button>
    </Link>
              </div>
          <div className="heroImage">
            <img src={yum} alt="restaurant" width="400" />
          </div>
            </div> 
        </section>

        <section className="specialsSection">
            <div className="specialsHeader">
                <h1>This Week's Specials</h1>
                <div className="specialsMenu">
            <button type="button" class="btn btn-secondary btn-lg"  aria-label="Online Menu">Online Menu</button>
            </div>
            </div>
         
            <div className="specials">
            <MenuItem title="Food Item" price="AUD 22" description="Yumy food from the birthplace of mother land"/>      
            <MenuItem title="Food Item" price="AUD 22" description="Yumy food from the birthplace of mother land"/>
            <MenuItem title="Food Item" price="AUD 22" description="Yumy food from the birthplace of mother land"/>
            </div>
            </section>

            <section className="aboutSection">
            <div className='sm-conatiner'>
            <div className="sideImage">
            <img src={owner} alt="restaurant" width="400" />
          </div>
            <div className="aboutText">
            <h1>About</h1>
            <p>Little Lemon Restaurant is a charming culinary haven that captivates diners with its delightful ambiance and exquisite flavors. Nestled in the heart of a bustling city, this hidden gem offers a unique fusion of traditional and modern cuisine, crafted with utmost precision and creativity. </p>
          </div> 
          </div> 
        </section>

        <section>
          <CustomersSay/>
        </section>

      </div>

    );
}
export default Home;
