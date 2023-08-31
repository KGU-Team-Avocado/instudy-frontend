import React from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import GroupJoinButton from "./GroupJoin/GroupJoinButton";
import GroupLeaveButton from "./GroupLeave/GroupLeaveButton";
import {selectGroup} from "../../slice/groupSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

interface GroupCardProps {
    group: {
        id: string;
        groupName: string;
    };
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
    const dispatch = useDispatch();

    const handleGroupClick = (groupId: string) => {
        // 그룹을 선택한 경우, 해당 그룹의 ID를 Redux 액션을 통해 전달합니다.
        dispatch(selectGroup(groupId));
    };

    const navigate = useNavigate();

    const handleCardClick = (groupId: string) => {
        // 그룹을 선택한 경우, 해당 그룹의 ID를 Redux 액션을 통해 전달합니다.
        dispatch(selectGroup(groupId));
        navigate(`/group/${groupId}`);
    };

    return (
        <Card variant="outlined" style={{ marginTop: '10px' }} onClick={() => handleCardClick(group.id)}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {group.groupName}
                </Typography>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <GroupJoinButton
                            onClick={() => handleGroupClick(group.id)}
                            groupId={group.id} // groupId 추가
                        />
                        <GroupLeaveButton

                            // groupId={group.id}

                        />
                    </Box>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default GroupCard;