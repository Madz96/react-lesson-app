import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../components/common/header/Header';

const MainLayout = () => {
   return (
      <>
         <Header />
         <Container fluid>
            <Outlet />
         </Container>
      </>
   );
};

export default MainLayout;
