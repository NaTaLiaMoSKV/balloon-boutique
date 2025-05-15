import { useEffect } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-height: 90vh;
  max-width: 100%;
`;

const ModalImage = styled.img`
  max-height: 90vh;
  max-width: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1;
`;

const BalloonImageModal = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={image} alt="Balloon Fullscreen" />
      </ModalContent>
    </Backdrop>
  );
};

export default BalloonImageModal;
