import { Outlet } from 'react-router-dom';
import Groups from "../features/groups/Groups";
import Header from '../components/common/Header';
import Footer from "./common/Footer";

function HomeLayout() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1, paddingTop: '100px' }}>
                <Groups />
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
