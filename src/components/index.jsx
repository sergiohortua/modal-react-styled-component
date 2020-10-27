import React, { useState } from 'react';
import { Modal,Container,Button } from './style';



export const ModalP1=()=> {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      
      </Container>
    </>
  );
}

