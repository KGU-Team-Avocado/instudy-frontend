import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Groups from './features/group/Groups';
import Profile from './features/profile/Profile';
import GroupView from './features/group/GroupView';
import Jokbo from './features/jokbo/Jokbo';
import Calendar from './features/calendar/Calendar';
import Feed from './features/feed/Feed';
import Timer from './features/timer/Timer';

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
      {
        path: '/group/:groupId',
        element: <GroupView />,
      },
      {
        path: '/jokbo',
        element: <Jokbo />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/timer',
        element: <Timer />,
      },
      {
        path: '/feed',
        element: <Feed />,
      },
    ],
  },
], {
  // basename: '/instudy-frontend'
});

export default router;
