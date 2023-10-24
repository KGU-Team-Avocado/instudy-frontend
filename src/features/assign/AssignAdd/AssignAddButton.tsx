// src\features\groups\GroupAdd\GroupAddButton.tsx
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import AssignAddModal from './AssignAddModal';

const StyledButton = styled(Button)`
  && {
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    background-color: #001f3f; // Removed single quotes
    color: white;
  }
`;

function RoundedButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledButton variant="contained" onClick={handleOpen}>
        <AddIcon />
      </StyledButton>
      <AssignAddModal open={open} onClose={handleClose} />
    </>
  );
}

export default RoundedButton;
