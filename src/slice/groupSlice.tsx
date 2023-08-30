import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 그룹 데이터 타입 정의
interface GroupData {
    id: number;
    groupName: string;
    description: string;
    manager: string;
    capacity: number;
    member: string[];
    groupStack: string[];
}

// 초기 상태 정의
const initialState: GroupData[] = [];

// 그룹 슬라이스 생성
const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<GroupData>) => {
            // Use action.payload to access the object data
            const newGroup = action.payload;
            return [...state, newGroup];
        },
    },
});

// 그룹 액션 익스포트
export const { addGroup } = groupSlice.actions;

// 슬라이스 리듀서 익스포트
export default groupSlice.reducer;
