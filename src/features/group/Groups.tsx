// src/features/groups/Groups.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { RootState } from '../../app/store';
import GroupAddButton from './GroupAdd/GroupAddButton';
import GroupSearchButton from './GroupSearch/GroupSearchButton';
import GroupCard from './GroupCard';
import { GroupData } from '../../slice/groupSlice';

const Groups: React.FC = () => {
  const groups = useSelector<RootState, GroupData[]>((state) => state.groups.groups);

  // 컨테이너를 스타일링하는 컴포넌트 생성
  const StyledContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px; /* 왼쪽 여백 추가 */
  margin-right: 20px; /* 오른쪽 여백 추가 */
`;

  return (
    <div>
      <StyledContainer>
        {groups.map((group) => (
          <Grid container spacing={2} key={group.id}>
            <Grid item xs={6}>
              <GroupCard group={group} />
            </Grid>
          </Grid>
        ))}
      </StyledContainer>

      <Paper
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '16px',
          padding: '16px',
          backgroundColor: 'white',
          zIndex: 999,
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        elevation={0}
      >
        <GroupSearchButton />
        <GroupAddButton />
      </Paper>
    </div>
  );
};

export default Groups;
