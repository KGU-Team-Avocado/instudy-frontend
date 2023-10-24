import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

function Header() {
  const selectedGroup = useSelector((state: RootState) => state.groups.selectedGroup);

  const groupName = selectedGroup ? selectedGroup.groupName : '';

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        {/* variant 속성을 작은 텍스트 크기로 변경 */}
        <Typography variant="body2" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>
          { groupName }
        </Typography>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
