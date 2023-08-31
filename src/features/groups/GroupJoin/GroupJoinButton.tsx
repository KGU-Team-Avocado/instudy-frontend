import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import GroupSearchModal from "../GroupSearch/GroupSearchModal";
import GroupJoinModal from "./GroupJoinModal";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";

// StyledButton 컴포넌트를 생성하여 남색 스타일 적용
const StyledButton = styled(Button)`
  && {
    background-color: #001f3f; /* 남색 배경색 */
    color: white; /* 흰색 텍스트 */
  }
`;

interface GroupJoinButtonProps {
    onClick: (event: React.MouseEvent) => void;
    groupId: string; // groupId를 속성으로 받음
}

const GroupJoinButton = ({ onClick }: GroupJoinButtonProps) => {
    const [open, setOpen] = useState(false);
    const selectedGroup = useSelector(
        (state: RootState) => state.groups.selectedGroup
    );

    const groupId = selectedGroup !== null ? selectedGroup : '';

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <StyledButton variant="contained" onClick={handleOpen}sx={{ marginRight: '8px' }}>가입</StyledButton>
        <GroupJoinModal open={open} onClose={handleClose} groupId={groupId}/>
        </>
    );
};

export default GroupJoinButton;