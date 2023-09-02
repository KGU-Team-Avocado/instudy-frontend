import {
  Outlet, useLocation, Route, Routes
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './common/Header';
import Footer from './common/Footer';
import GroupHeader from './common/GroupHeader';

const StyledContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledContent = styled.div`
    flex: 1;
    padding-top: 100px;
`;

function HomeLayout() {
  // const { groupId } = useParams();
  const location = useLocation();
  return (
    <StyledContainer>
      {!location.pathname.startsWith('/group/') && <Header />}
      <Routes>
        <Route path="/group/:groupId" element={<GroupHeader />} />
      </Routes>
      <StyledContent>
        <Outlet />
      </StyledContent>
      {!location.pathname.startsWith('/group/') && <Footer />}
    </StyledContainer>
  );
}

export default HomeLayout;
