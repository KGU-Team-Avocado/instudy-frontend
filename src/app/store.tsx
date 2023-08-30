import { configureStore } from '@reduxjs/toolkit';
import groupSlice from '../slice/groupSlice'; // 실제 파일 위치에 맞게 경로 수정

// 스토어 생성
export const store = configureStore({
    reducer: {
        groups: groupSlice, // 리듀서 등록
    },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
