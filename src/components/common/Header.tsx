import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components';
import { Button } from "@mui/material";

// StyledButton 컴포넌트를 생성하여 남색 스타일 적용
const StyledButton = styled(Button)`
  && {
    background-color: #001f3f; /* 남색 배경색 */
    color: white; /* 흰색 텍스트 */
  }
`;

const Header = () => {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                {/* variant 속성을 작은 텍스트 크기로 변경 */}
                <Typography variant="body2" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>
                    스터디 그룹
                </Typography>
                {/* StyledButton 컴포넌트 사용 */}
                <StyledButton variant="contained">프리미엄</StyledButton>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
