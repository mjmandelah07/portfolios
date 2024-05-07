import React from "react";
import Modal from "react-bootstrap/Modal";

interface PopUpProps {
  image: string;
  alt: string;
  show: boolean;
  onHide: () => void;

}

const PopUp: React.FC<PopUpProps> = ({ image, alt, show, onHide }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="modal-100w modal-100h"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={image} alt={alt} style={{ width: "100%" }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopUp;
