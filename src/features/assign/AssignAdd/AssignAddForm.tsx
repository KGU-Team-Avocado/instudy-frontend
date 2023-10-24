import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Box, Grid, TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addAssignment } from '../../../slice/assignSlice';

interface AssignAddFormProps {
  onSubmit: (formData: any) => void; // 이름을 'onSubmit'으로 변경
}

const StyledButton = styled(Button)`
  && {
    background-color: #001f3f;
    color: white;
  }
`;

const AssignAddForm: React.FC<AssignAddFormProps> = ({ onSubmit }) => { // 이름을 'onSubmit'으로 변경
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    userId: '',
    todoText: '',
    status: 'READY',
    todoId: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => { // 함수 이름 변경
    e.preventDefault();
    dispatch(addAssignment(formData));
    onSubmit(formData); // onSubmit 콜백 호출
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="투두"
            variant="outlined"
            name="todoText"
            value={formData.todoText}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <StyledButton type="submit" variant="contained">
              생성
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default AssignAddForm;
