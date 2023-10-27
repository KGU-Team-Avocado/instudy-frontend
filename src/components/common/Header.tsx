import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components';
import { Button } from '@mui/material';
import {
  GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout
} from 'react-google-login';

// StyledButton 컴포넌트를 생성하여 남색 스타일 적용
const StyledButton = styled(Button)`
  && {
    background-color: '#001f3f'; /* 남색 배경색 */
    color: white; /* 흰색 텍스트 */
  }
`;

// interface GoogleResponse {
//   profileObj: {
//     email: string;
//     familyName: string;
//     givenName: string;
//     googleId: string;
//     imageUrl: string;
//     name: string;
//   };
//   tokenId: string;
// }

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      setIsLoggedIn(true);
      console.log(response);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        {/* variant 속성을 작은 텍스트 크기로 변경 */}
        <Typography variant="body2" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>
          스터디 그룹
        </Typography>
        {/* StyledButton 컴포넌트 사용 */}
        <StyledButton variant="contained">프리미엄</StyledButton>
        {isLoggedIn ? (
          <GoogleLogout
            clientId="873237699798-mn38k7vuo7idkp4p4cbotj80v1taf814.apps.googleusercontent.com"
            buttonText="로그아웃"
            onLogoutSuccess={handleLogout}
          />
        ) : (
          <GoogleLogin
            clientId="873237699798-mn38k7vuo7idkp4p4cbotj80v1taf814.apps.googleusercontent.com"
            buttonText="Google 로그인"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        )}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
