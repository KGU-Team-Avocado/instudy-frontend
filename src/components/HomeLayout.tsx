import {
  Outlet, Route, Routes
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './common/Header';
import Footer from './common/Footer';
import GroupHeader from './common/GroupHeader';
import GroupFooter from './common/GroupFooter';

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledContent = styled.div`
  flex: 1;
  padding-top: 100px;
`;

function HomeLayout() {
  // const { groupId } = useParams();
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/group/:groupId" element={<GroupHeader />} />
        <Route path="/jokbo" element={<GroupHeader />} />
        <Route path="/calendar" element={<GroupHeader />} />
        <Route path="/timer" element={<GroupHeader />} />
        <Route path="/feed" element={<GroupHeader />} />
      </Routes>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/group/:groupId" element={<GroupFooter />} />
        <Route path="/jokbo" element={<GroupFooter />} />
        <Route path="/calendar" element={<GroupFooter />} />
        <Route path="/timer" element={<GroupFooter />} />
        <Route path="/feed" element={<GroupFooter />} />
      </Routes>
    </StyledContainer>
  );
}

export default HomeLayout;
