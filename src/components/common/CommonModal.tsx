import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  outline: none;
  width: 400px;
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function CommonModal({ open, onClose, children }: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModal>
        {children}
      </StyledModal>
    </Modal>
  );
}

export default CommonModal;
