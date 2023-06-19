import React from 'react';
import { Container, Header, List, Image, Segment } from 'semantic-ui-react';
import videobg from "../../Assets/videobg.mp4"; // Import the video file
import CustomersSay from '../Layout/CustomersSay';
import owner from "../../Assets/owner.png"
import Menus from '../Elements/Menus';

const Menu= () => {

  const menuStyle = {
    backgroundColor: 'white',
    marginTop: '50px',
    padding: '20px',
  };


  return (
    <>
    <Segment className="m-1 bg-custom paddings-3">
    <Header className=''>
      <h1 className="ui icon center aligned header">Menu</h1>
    </Header>
    <video
          src={videobg} // Use the imported video file
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
    </Segment>
    <Container style={menuStyle} className='greybg sm-conatiner'>
        <Header className="white-color" as="h2">Little Lemons Restaurant Menu</Header>
        <Menus/>
      </Container>
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
    </>
     
  );
};

export default Menu;
