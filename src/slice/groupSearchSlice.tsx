import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GroupData {
    groupName: string;
    description: string;
    manager: string;
    capacity: number;
    member: string[];
    groupStack: string[];
}

interface GroupSearchState {
    manager: string;
    groupName: string;
    searchResults: GroupData[]; // 실제 데이터 타입에 대한 것입니다.
}

const initialState: GroupSearchState = {
    manager: '',
    groupName: '',
    searchResults: [],
};

const groupSearchSlice = createSlice({
    name: 'groupSearch',
    initialState,
    reducers: {
        setManager: (state, action: PayloadAction<string>) => {
            state.manager = action.payload;
        },
        setGroupName: (state, action: PayloadAction<string>) => {
            state.groupName = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<GroupData[]>) => {
            state.searchResults = action.payload;
        },
    },
});

export const { setManager, setGroupName, setSearchResults } = groupSearchSlice.actions;

export default groupSearchSlice.reducer;
