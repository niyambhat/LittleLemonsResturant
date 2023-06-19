import React from 'react';
import { Container, Header, List, Image } from 'semantic-ui-react';

const Menus = () => {
  const menuItems = [
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'placeholder-image-1.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
      image: 'placeholder-image-2.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'placeholder-image-1.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
      image: 'placeholder-image-2.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'placeholder-image-1.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
      image: 'placeholder-image-2.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'placeholder-image-1.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
      image: 'placeholder-image-2.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'placeholder-image-1.jpg', // Replace with actual image URL or import the image
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
      image: 'placeholder-image-2.jpg', // Replace with actual image URL or import the image
    }
    // Add more items here...
  ];

  const menuStyle = {
    backgroundColor: '#494949 !important',
    marginTop: '50px',
    padding: '20px',
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const menuItemContentStyle = {
    marginLeft: '20px',
  };

  return (
    <Container style={menuStyle} className="greybg">
      {menuItems.map((item, index) => (
        <div key={index} style={menuItemStyle}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" rounded size="small" /> {/* Placeholder image */}
          <div style={menuItemContentStyle}>
            <List>
              <List.Header><h2 className='ui header white-color'>{item.name}</h2></List.Header>
              <List.Description className='ui white-color'>{item.description}</List.Description>
              <List.Description className='ui white-color'>{item.price}</List.Description>
              <p className='ui white-color'>{item.paragraphDescription}</p>
            </List>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Menus;
