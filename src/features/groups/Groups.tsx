// src/features/groups/Groups.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';
import { RootState } from '../../app/store';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import GroupSearch from "./GroupSearch";
import GroupAddButton from "./GroupAdd/GroupAddButton";

const Groups: React.FC = () => {
    const groups = useSelector((state: RootState) => state.groups);
    const dispatch = useDispatch();
    const [groupName, setGroupName] = useState('');

    return (
        <div>
            <div style={{ marginTop: '20px' }}>
                {groups.map((group) => (
                    <Grid item xs={6}>
                        <Card key={group.id} variant="outlined" style={{ marginTop: '10px' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {group.groupName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </div>

            <Container maxWidth="sm">
                {/* 페이지 내용 */}
            </Container>
            <Paper
                style={{
                    position: 'fixed',
                    bottom: '100px', // 하단 여백 조절
                    right: '16px', // 오른쪽 여백 조절
                    padding: '16px',
                    backgroundColor: 'white',
                    zIndex: 999, // 다른 요소 위에 보이도록 설정
                    boxShadow: 'none', // 그림자 없음
                    display: 'flex', // Flexbox 사용
                    flexDirection: 'column', // 수직으로 배치
                    alignItems: 'center', // 가운데 정렬
                }}
                elevation={0} // elevation prop을 0으로 설정하여 그림자를 없앰
            >
                <GroupSearch />
                <GroupAddButton />
            </Paper>



        </div>
    );
};

export default Groups;
