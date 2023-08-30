import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    background-color: white;
    color: black;
  }
`;

const GroupSearch = () => {
    return (
        <StyledButton variant="contained">
            <SearchIcon />
        </StyledButton>
    );
};

export default GroupSearch;
