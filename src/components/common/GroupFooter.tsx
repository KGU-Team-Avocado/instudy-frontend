import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FamilyTreeIcon from '../../assets/FamilyTreeIcon';

function GroupFooter() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기
  const { groupId } = useParams();

  // 각 버튼에 대한 독립적인 hover 상태 변수
  const [isHovered, setIsHovered] = useState({
    assign: false,
    jokbo: false,
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

  const jokboColor = isHovered.jokbo || isButtonActive('/jokbo') ? '#ffffff' : '#084B8A';

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
            xs={2}
            onClick={() => navigateTo(`/group/${groupId}`)}
            onMouseEnter={() => setIsHovered({ ...isHovered, assign: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, assign: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.assign || isButtonActive('/assign') ? 'secondary.main' : 'primary.light',
            }}
          >
            <MenuBookIcon />
            <Typography variant="body2">과제</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => navigateTo('/jokbo')}
            onMouseEnter={() => setIsHovered({ ...isHovered, jokbo: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, jokbo: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.jokbo || isButtonActive('/jokbo') ? 'secondary.main' : 'primary.light',
            }}
          >
            <FamilyTreeIcon size={25} color={jokboColor} />
            <Typography variant="body2">족보</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => navigateTo('/calendar')}
            onMouseEnter={() => setIsHovered({ ...isHovered, calendar: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, calendar: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.calendar || isButtonActive('/calendar') ? 'secondary.main' : 'primary.light',
            }}
          >
            <CalendarTodayIcon />
            <Typography variant="body2">캘린더</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            onClick={() => navigateTo('/timer')}
            onMouseEnter={() => setIsHovered({ ...isHovered, timer: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, timer: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.timer || isButtonActive('/timer') ? 'secondary.main' : 'primary.light',
            }}
          >
            <TimerIcon />
            <Typography variant="body2">타이머</Typography>
          </Grid>
          <Grid
            item
            xs={2} // 가로 공간을 2로 분할
            onClick={() => navigateTo('/feed')}
            onMouseEnter={() => setIsHovered({ ...isHovered, feed: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, feed: false })}
            sx={{
              cursor: 'pointer',
              color: isHovered.feed || isButtonActive('/feed') ? 'secondary.main' : 'primary.light',
            }}
          >
            <DynamicFeedIcon />
            <Typography variant="body2">피드</Typography>
          </Grid>
          {/* 추가 버튼들 */}
        </Grid>

      </Box>
    </ThemeProvider>
  );
}

export default GroupFooter;
