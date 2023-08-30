import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addGroup } from "../../../slice/groupSlice";

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  outline: none;
  width: 400px; /* 원하는 너비로 조절 */
  height: 500px; /* 원하는 높이로 조절 */
`;

interface GroupAddModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupAddModal: React.FC<GroupAddModalProps> = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 입력 폼에서 수집한 데이터
        const newGroupData = {
            id: Date.now(),
            groupName: formData.name,
            description: '',
            manager: '',
            capacity: 0,
            member: [],
            groupStack: [],
        };

        // 스토어에 새로운 그룹 추가
        dispatch(
            addGroup(newGroupData)
        );

        console.log('Form data submitted:', formData);
        onClose(); // 모달 닫기
    };

    const [member, setMember] = React.useState('');

    const handleMemberChange = (event: SelectChangeEvent) => {
        setMember(event.target.value as string);
    };

    const [groupStack, setGroupStack] = React.useState('');

    const handleGroupStackChange = (event: SelectChangeEvent) => {
        setGroupStack(event.target.value as string);
    };

    const dispatch = useDispatch(); // useDispatch 훅을 이용하여 디스패치 함수 가져오기

    // StyledButton 컴포넌트를 생성하여 남색 스타일 적용
    const StyledButton = styled(Button)`
    && {
      background-color: #001f3f; /* 남색 배경색 */
      color: white; /* 흰색 텍스트 */
    }
  `;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <h2 id="modal-modal-title">그룹 생성</h2>
                <p id="modal-modal-description">
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Box display="flex" alignItems="center" marginBottom="16px">
                                <Typography variant="subtitle1" marginRight="8px" style={{ width: '120px', textAlign: 'right' }}>
                                    이름
                                </Typography>
                                <TextField
                                    label="이름"
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1" marginRight="8px" style={{ width: '120px', textAlign: 'right' }}>
                                    이메일
                                </Typography>
                                <TextField
                                    label="이메일"
                                    variant="outlined"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1" marginRight="8px" style={{ width: '120px', textAlign: 'right' }}>
                                    그룹원 수
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={member}
                                            label="Age"
                                            onChange={handleMemberChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1" marginRight="8px" style={{ width: '120px', textAlign: 'right' }}>
                                    공부 키워드
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={groupStack}
                                            label="Age"
                                            onChange={handleGroupStackChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="subtitle1" marginRight="8px" style={{ width: '120px', textAlign: 'right' }}>
                                    그룹장 승인 여부
                                </Typography>
                                <Box sx={{ minWidth: 120 }}>
                                    <StyledButton variant="contained">가입 O</StyledButton>
                                    <StyledButton variant="contained">가입 X</StyledButton>
                                </Box>
                            </Box>
                        </Box>
                    </form>
                </p>
            </StyledModal>
        </Modal>
    );
};

export default GroupAddModal;
