import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 그룹 데이터 타입 정의
export interface GroupData {
    id: string;
    groupName: string;
    description: string;
    manager: string;
    capacity: number;
    member: string[];
    groupStack: string[];
}

// 초기 상태 정의
interface GroupState {
    groups: GroupData[];
    joinedGroups: GroupData[];
    selectedGroup: string | null;
}

const initialState: GroupState = {
    groups: [],
    joinedGroups: [],
    selectedGroup: null,
};

// 그룹 슬라이스 생성
const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<GroupData>) => {
            // Use action.payload to access the object data
            const newGroup = action.payload;
            state.groups.push(newGroup);
        },
        joinGroup: (state, action: PayloadAction<string>) => {
            const groupIdToJoin = action.payload;
            // 해당 그룹을 groups 배열에서 찾아옵니다.
            const groupToJoin = state.groups.find(group => group.id === groupIdToJoin);

            if (groupToJoin) {
                // 그룹 용량(capacity) 체크
                if (groupToJoin.member.length < groupToJoin.capacity) {
                    // 가입한 그룹을 joinedGroups 배열에 추가합니다.
                    state.joinedGroups.push(groupToJoin);
                } else {
                    // 가입할 수 없음을 사용자에게 알려줍니다.
                    alert('이 그룹의 용량이 초과되었습니다. 가입할 수 없습니다.');
                }
            }
        },
        selectGroup: (state, action: PayloadAction<string>) => {
            // 선택한 그룹의 ID를 상태에 저장
            state.selectedGroup = action.payload;
        },
        leaveGroup: (state, action: PayloadAction<string>) => {
            // action.payload에는 탈퇴할 그룹의 id가 전달됩니다.
            const groupIdToLeave = action.payload;

            // joinedGroups 배열에서 해당 그룹을 제거합니다.
            state.joinedGroups = state.joinedGroups.filter(group => group.id !== groupIdToLeave);
        },
    },
});

// 그룹 액션 익스포트
export const { addGroup, joinGroup, selectGroup } = groupSlice.actions;

// 슬라이스 리듀서 익스포트
export default groupSlice.reducer;

