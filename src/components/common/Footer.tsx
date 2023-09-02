import React, { useState } from 'react';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기
  const [isGroupHovered, setIsGroupHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const navigateToGroup = () => {
    navigate('/');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#001f3f', // 남색
        light: '#084B8A', // 연한 남색
      },
      secondary: {
        main: '#ffffff', // 흰색
      },
    },
  });

  // 현재 경로에 따라 버튼 스타일을 설정
  const isGroupButtonActive = location.pathname === '/';
  const isProfileButtonActive = location.pathname === '/profile';

  let groupColor;
  if (isGroupHovered) {
    groupColor = 'primary.main';
  } else if (isGroupButtonActive) {
    groupColor = 'secondary.main';
  } else {
    groupColor = 'primary.light';
  }

  let profileColor;
  if (isProfileHovered) {
    profileColor = 'primary.main';
  } else if (isProfileButtonActive) {
    profileColor = 'secondary.main';
  } else {
    profileColor = 'primary.light';
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          textAlign: 'center',
          padding: '16px',
          borderRadius: '16px',
          margin: '20px',
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            xs={6}
            onClick={navigateToGroup}
            onMouseEnter={() => setIsGroupHovered(true)}
            onMouseLeave={() => setIsGroupHovered(false)}
            sx={{
              cursor: 'pointer',
              color: groupColor// 연한 남색
            }}
          >
            <GroupsIcon />
            <Typography variant="body2">그룹</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            onClick={navigateToProfile}
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
            sx={{
              cursor: 'pointer',
              color: profileColor
            }}
          >
            <AccountCircleIcon />
            <Typography variant="body2">프로필</Typography>
          </Grid>

        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
