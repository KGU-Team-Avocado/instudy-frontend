// src/features/groups/Groups.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Card, CardContent, TextField, Button, Typography, Grid, Box} from '@mui/material';
import { RootState } from '../../app/store';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import GroupAddButton from "./GroupAdd/GroupAddButton";
import GroupSearchButton from "./GroupSearch/GroupSearchButton";
import styled from 'styled-components';
import GroupJoinButton from "./GroupJoin/GroupJoinButton";
import GroupLeaveButton from "./GroupLeave/GroupLeaveButton";
import {selectGroup} from "../../slice/groupSlice";
import GroupCard from "./GroupCard";

const Groups: React.FC = () => {
    const groups = useSelector((state: RootState) => state.groups.groups);

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
                            <GroupCard group={group}/>
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
