import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { commonHelper } from '../../../helpers/commonHelper';
import { routeHelper } from '../../../helpers/routeHelper';

const Header = () => {
   const { APP_NAME, NAV_ITEMS } = commonHelper;

   const navigate = useNavigate();

   return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
         <Container>
            <Navbar.Brand
               href=""
               onClick={() => navigate(routeHelper.DASHBOARD.PATH)}
            >
               {APP_NAME}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href=""
                     onClick={() => navigate(routeHelper.DASHBOARD.PATH)}
                  >
                     {NAV_ITEMS.DASHBOARD}
                  </Nav.Link>
                  <Nav.Link
                     href=""
                     onClick={() => navigate(routeHelper.POST_MANAGER.PATH)}
                  >
                     {NAV_ITEMS.POST_MANAGER}
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;
