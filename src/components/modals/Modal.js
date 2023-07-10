import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function DefaultModal(props) {
  return (
    <Modal
      {...props}
      size={props.size ? props.size : 'lg'}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}
