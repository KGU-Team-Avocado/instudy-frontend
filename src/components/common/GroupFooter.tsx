import React, { useState } from 'react';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import { Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function GroupFooter() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기
  const [isHovered, setIsHovered] = useState({
    assign: false,
    todo: false,
    calendar: false,
    timer: false,
    feed: false,
  });

  const navigateTo = (path: string) => {
    navigate(path);
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

  const isButtonActive = (path: string) => location.pathname === path;

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
            onClick={() => navigateTo('/assign')}
            onMouseEnter={() => setIsHovered({ ...isHovered, assign: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, assign: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.assign
                ? 'primary.main'
                : isButtonActive('/assign')
                  ? 'secondary.main'
                  : 'primary.light', // 연한 남색
            }}
          >
            <GroupsIcon />
            <Typography variant="body2">과제</Typography>
          </Grid>
          {/* <Grid */}
          {/*    item */}
          {/*    xs={6} */}
          {/*    onClick={() => navigateTo('/assign')} */}
          {/*    onMouseEnter={() => setIsHovered({ ...isHovered, assign: true })} */}
          {/*    onMouseLeave={() => setIsHovered({ ...isHovered, assign: false })} */}
          {/*    sx={{ */}
          {/*        cursor: 'pointer', */}
          {/*        color: isHovered.assign */}
          {/*            ? 'primary.main' */}
          {/*            : isGroupButtonActive */}
          {/*                ? 'secondary.main' */}
          {/*                : 'primary.light', // 연한 남색 */}
          {/*    }} */}
          {/* > */}
          {/*    <GroupsIcon /> */}
          {/*    <Typography variant="body2">족보</Typography> */}
          {/* </Grid> */}
          {/* <Grid */}
          {/*    item */}
          {/*    xs={6} */}
          {/*    onClick={() => navigateTo('/assign')} */}
          {/*    onMouseEnter={() => setIsHovered({ ...isHovered, assign: true })} */}
          {/*    onMouseLeave={() => setIsHovered({ ...isHovered, assign: false })} */}
          {/*    sx={{ */}
          {/*        cursor: 'pointer', */}
          {/*        color: isHovered.assign */}
          {/*            ? 'primary.main' */}
          {/*            : isGroupButtonActive */}
          {/*                ? 'secondary.main' */}
          {/*                : 'primary.light', // 연한 남색 */}
          {/*    }} */}
          {/* > */}
          {/*    <GroupsIcon /> */}
          {/*    <Typography variant="body2">타이머</Typography> */}
          {/* </Grid> */}
          {/* <Grid */}
          {/*    item */}
          {/*    xs={6} */}
          {/*    onClick={() => navigateTo('/assign')} */}
          {/*    onMouseEnter={() => setIsHovered({ ...isHovered, assign: true })} */}
          {/*    onMouseLeave={() => setIsHovered({ ...isHovered, assign: false })} */}
          {/*    sx={{ */}
          {/*        cursor: 'pointer', */}
          {/*        color: isHovered.assign */}
          {/*            ? 'primary.main' */}
          {/*            : isGroupButtonActive */}
          {/*                ? 'secondary.main' */}
          {/*                : 'primary.light', // 연한 남색 */}
          {/*    }} */}
          {/* > */}
          {/*    <GroupsIcon /> */}
          {/*    <Typography variant="body2">피드</Typography> */}
          {/* </Grid> */}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default GroupFooter;
