import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";
import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addGroup } from "../../../slice/groupSlice";
import GroupAddForm from "./GroupAddForm";

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

interface GroupAddModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupAddModal: React.FC<GroupAddModalProps> = ({ open, onClose }) => {
    const handleFormSubmit = (formData: any) => {
        // 폼 데이터를 처리하는 로직 (예: 서버에 전송)
        console.log('Form data submitted:', formData);
        onClose(); // 모달 닫기
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <h2 id="modal-modal-title">그룹 생성</h2>
                <div id="modal-modal-description">
                    <GroupAddForm onSubmit={handleFormSubmit}/>
                </div>
            </StyledModal>
        </Modal>
    );
};

export default GroupAddModal;
