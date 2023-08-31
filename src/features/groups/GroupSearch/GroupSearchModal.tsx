import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setManager, setGroupName, setSearchResults } from '../../../slice/groupSearchSlice';
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { RootState } from "../../../app/store";
import { GroupData } from '../../../slice/groupSlice';
import { Box, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";

// Styled components
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
  height: 500px;
`;

// StyledButton 컴포넌트를 생성하여 남색 스타일 적용
const StyledButton = styled(Button)`
  && {
    background-color: #001f3f; /* 남색 배경색 */
    color: white; /* 흰색 텍스트 */
  }
`;

interface GroupSearchModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupSearchModal: React.FC<GroupSearchModalProps> = ({ open, onClose }) => {

    const dispatch = useDispatch();
    const { manager, groupName, searchResults } = useSelector((state: RootState) => state.groupSearch);

    const [formData, setFormData] = useState({
        manager: '',
        groupName: '',
    });

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }, [formData]);

    const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 여기에서 API 호출 또는 필요한 로직을 수행하여 검색 결과를 가져옵니다.
        const fetchedResults: GroupData[] = []; // 검색 결과를 가져오는 로직에 맞게 수정해야 합니다.

        // 검색 결과를 스토어에 업데이트합니다.
        dispatch(setSearchResults(fetchedResults));
    }, [dispatch]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <h2 id="modal-modal-title">그룹 검색</h2>
                <div id="modal-modal-description">
                    <form onSubmit={handleSearch}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="팀장명"
                                    variant="outlined"
                                    name="manager"
                                    value={formData.manager}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="팀명"
                                    variant="outlined"
                                    name="groupName"
                                    value={formData.groupName}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="flex-end">
                                    <StyledButton type="submit" variant="contained">검색</StyledButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </StyledModal>
        </Modal>
    );
};

export default GroupSearchModal;
