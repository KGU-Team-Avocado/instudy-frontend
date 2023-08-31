import React from 'react';
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { joinGroup } from "../../../slice/groupSlice";

interface GroupJoinModalProps {
    open: boolean;
    onClose: () => void;
    groupId: string;
}

const GroupJoinModal: React.FC<GroupJoinModalProps> = ({ open, onClose, groupId }) => {
    const StyledModal = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        outline: none;
        width: 400px;
        height: 200px;
    `;

    // StyledButton 컴포넌트를 생성하여 남색 스타일 적용
    const StyledButton = styled(Button)`
    && {
        background-color: #001f3f; /* 남색 배경색 */
        color: white; /* 흰색 텍스트 */
    }
    `;

    const dispatch = useDispatch();

    const handleJoin = () => {
        // 가입 요청을 보내는 로직을 작성합니다.
        // joinGroup 액션을 사용하여 Redux 스토어에 가입 요청을 전달합니다.
        dispatch(joinGroup(groupId));

        // 모달을 닫습니다.
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <h2 id="modal-modal-title">가입하기</h2>
                <p id="modal-modal-description">
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <StyledButton type="submit" variant="contained" onClick={handleJoin}>확인</StyledButton>
                        </Box>
                    </Grid>
                </p>
            </StyledModal>
        </Modal>
    );
};

export default GroupJoinModal;
