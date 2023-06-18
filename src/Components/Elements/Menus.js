import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

const Menus = () => {
  const menuItems = [
    {
      name: 'Item 1',
      description: 'Description of item 1',
      price: '$10',
      paragraphDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Item 2',
      description: 'Description of item 2',
      price: '$12',
      paragraphDescription: 'Praesent vel justo lacinia, posuere eros a, ultrices lectus.',
    },
    {
      name: 'Item 3',
      description: 'Description of item 3',
      price: '$8',
      paragraphDescription: 'Etiam feugiat felis sit amet nunc vehicula fringilla.',
    },
    {
      name: 'Item 4',
      description: 'Description of item 4',
      price: '$15',
      paragraphDescription: 'Nullam accumsan arcu in sem elementum, sed egestas lacus malesuada.',
    },
    {
      name: 'Item 5',
      description: 'Description of item 5',
      price: '$9',
      paragraphDescription: 'Vivamus vel sem vulputate, vulputate dui eget, tempus tortor.',
    },
    // Add more items here...
  ];
  const menuStyle = {
    backgroundColor: 'white',
    marginTop:'50px'
  };


  return (
    <Container style={menuStyle}>
      <Header as="h2">Little Lemons Restaurant Menu</Header>
      <List divided relaxed>
        {menuItems.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>{item.name}</List.Header>
              <List.Description>{item.description}</List.Description>
              <List.Description>{item.price}</List.Description>
              <p>{item.paragraphDescription}</p>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Menus;
