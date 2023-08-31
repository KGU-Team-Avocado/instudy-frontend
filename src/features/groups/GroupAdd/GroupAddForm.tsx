import React, { useState, ChangeEvent, FormEvent } from 'react';
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
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {addGroup, GroupData} from '../../../slice/groupSlice';
import {nanoid} from "@reduxjs/toolkit";

interface GroupAddFormProps {
    onSubmit: (formData: any) => void;
}

const StyledButton = styled(Button)`
  && {
    background-color: #001f3f;
    color: white;
  }
`;

const GroupAddForm: React.FC<GroupAddFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        groupName: '',
        description: '',
        capacity: '',
        groupStack: [] as string[] // Specify the type as string[]
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);

        const newGroupData: GroupData = {
            id: nanoid(),
            groupName: formData.groupName,
            description: formData.description,
            capacity: parseInt(formData.capacity, 10),
            groupStack: formData.groupStack,
            manager: 'YourManagerValue',
            member: []
        };

        dispatch(addGroup(newGroupData));
    };

    const [capacity, setCapacity] = useState('');

    const handleCapacityChange = (e: SelectChangeEvent) => {
        const capacityValue = e.target.value as string;
        setCapacity(capacityValue);

        setFormData({
            ...formData,
            capacity: capacityValue
        });
    };

    const dispatch = useDispatch();

    const [selectedGroupStacks, setSelectedGroupStacks] = useState<string[]>([]);

    const handleGroupStackChange = (e: SelectChangeEvent<string | string[]>) => {
        const value = e.target.value as string[];
        setSelectedGroupStacks(value);

        setFormData({
            ...formData,
            groupStack: value
        });
    };

    const [isApproved, setIsApproved] = useState(false);
    const [isRejected, setIsRejected] = useState(false);

    const handleApproval = () => {
        setIsApproved(true);
        setIsRejected(false);
    };

    const handleRejection = () => {
        setIsRejected(true);
        setIsApproved(false);
    };

    const keywordLabels: { [key: string]: string } = {
        'group1': '프로그래밍/IT',
        'React': 'React',
        'Spring': 'Spring',
        'Mysql': 'MySQL',
        'AWS': 'AWS',
        'group2': '자격증',
        'InformationProcessingEngineer': '정보처리기사',
        'SQLD': 'SQLD',
        'InformationSecurityEngineer': '정보보안기사',
        'ComputerProficiency': '컴퓨터활용능력',
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="그룹 이름"
                        variant="outlined"
                        name="groupName"
                        value={formData.groupName}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="그룹 설명"
                        variant="outlined"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="member-label">그룹원 수</InputLabel>
                        <Select
                            value={capacity}
                            onChange={handleCapacityChange}
                            variant="outlined"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="stack-label">공부 키워드</InputLabel>
                        <Select
                            multiple
                            value={selectedGroupStacks}
                            onChange={(event: SelectChangeEvent<string[]>) => handleGroupStackChange(event)}
                            renderValue={(selected) => selected.map((value) => keywordLabels[value]).join(', ')}
                        >
                            <MenuItem value="group1" disabled>
                                프로그래밍/IT
                            </MenuItem>
                            <MenuItem value="React">React</MenuItem>
                            <MenuItem value="Spring">Spring</MenuItem>
                            <MenuItem value="Mysql">MySQL</MenuItem>
                            <MenuItem value="AWS">AWS</MenuItem>
                            <MenuItem value="group2" disabled>
                                자격증
                            </MenuItem>
                            <MenuItem value="InformationProcessingEngineer">정보처리기사</MenuItem>
                            <MenuItem value="SQLD">SQLD</MenuItem>
                            <MenuItem value="InformationSecurityEngineer">정보보안기사</MenuItem>
                            <MenuItem value="ComputerProficiency">컴퓨터활용능력</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        그룹장 승인 여부
                    </Typography>
                    <Box display="flex" sx={{ gap: '8px' }}>
                        <StyledButton
                            variant="contained"
                            onClick={handleApproval}
                            color={isApproved ? 'primary' : 'inherit'}
                            disabled={isApproved}
                        >
                            승인 O
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            onClick={handleRejection}
                            color={isRejected ? 'secondary' : 'inherit'}
                            disabled={isRejected}
                        >
                            승인 X
                        </StyledButton>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <StyledButton type="submit" variant="contained">생성</StyledButton>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default GroupAddForm;
