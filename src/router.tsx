import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Groups from './features/group/Groups';
import Profile from './features/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    // 페이지 추가를 여기 해주세요
    children: [
      {
        path: '',
        element: <Groups />,
      },
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
