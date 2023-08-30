// RoundedButton.js
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import GroupAddModal from "./GroupAddModal";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    background-color: #001f3f; 
    color: white;
  }
`;

const RoundedButton = () => {
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
            <GroupAddModal open={open} onClose={handleClose} />
        </>
    );
}

export default RoundedButton;
