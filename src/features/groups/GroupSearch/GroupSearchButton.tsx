import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import styled from 'styled-components';
import GroupSearchModal from "./GroupSearchModal";

const StyledButton = styled(Button)`
  && {
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    background-color: white;
    color: black;
  }
`;

const GroupSearchButton = () => {
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
            <SearchIcon />
        </StyledButton>
        <GroupSearchModal open={open} onClose={handleClose} />
        </>
    );
};

export default GroupSearchButton;
