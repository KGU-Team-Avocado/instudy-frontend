import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Profile from '../src/features/profile/Profile'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        // 페이지 추가를 여기 해주세요
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
        ],
    },
], {
    // basename: '/instudy-frontend'
});

export default router;
