import React, {useState} from 'react';
import styled from "styled-components";
import {Box, Button, Grid, Typography} from "@mui/material";
import GroupJoinModal from "../GroupJoin/GroupJoinModal";
import CommonModal from "../../../components/common/CommonModal";
import { useDispatch, useSelector } from 'react-redux';

const GroupLeaveButton = () => {
    // StyledButton 컴포넌트를 생성하여 남색 스타일 적용
    const StyledButton = styled(Button)`
  && {
    background-color: #001f3f; /* 남색 배경색 */
    color: white; /* 흰색 텍스트 */
  }
`;

    const CustomStyledModal = styled(CommonModal)`
  height: 200px;
`;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const dispatch = useDispatch();
    //
    // const groupData = useSelector((state) => state.groups.joinedGroups);
    //
    // const handleLeave = () => {
    //     if (groupData.length > 0) {
    //         // 첫 번째 그룹의 id를 가져옵니다.
    //         const groupIdToLeave = groupData[0].id;
    //
    //         // leaveGroup 액션에 그룹의 id를 전달하여 탈퇴합니다.
    //         dispatch(leaveGroup(groupIdToLeave));
    //     }
    //
    //     // 모달을 닫습니다.
    //     handleClose();
    // };

    return (
        <>
        <StyledButton type="submit" variant="contained" onClick={handleOpen}>탈퇴</StyledButton>
            <CustomStyledModal open={open} onClose={handleClose}>
                <h2 id="modal-modal-title">탈퇴하기</h2>
                <div id="modal-modal-description">
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <StyledButton type="submit" variant="contained"

                                          // onClick={handleLeave}
                            >확인</StyledButton>
                        </Box>
                    </Grid>
                </div>

            </CustomStyledModal >
        </>
    );
};

export default GroupLeaveButton;