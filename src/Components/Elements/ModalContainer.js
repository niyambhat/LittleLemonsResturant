import React,{useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


function ModalContainer({title,buttonTitle, children}) {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
    closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>{buttonTitle}</Button>}
    >
      <Modal.Header>
      <Header as='h2' textAlign='center'>
      {title}
    </Header></Modal.Header>
      <Modal.Content image>
        {children}
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Login"
          labelPosition='right'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalContainer;