import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";

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

const CommonModal: React.FC<ModalProps> = ({ open, onClose, children }) => { // children를 props로 받아옴
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
};

export default CommonModal;
