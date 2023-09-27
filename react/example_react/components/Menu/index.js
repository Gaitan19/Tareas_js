import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
} from '@coreui/react';
import { useState } from 'react';
import TabMenu from './tabMenu';
import Acordion from './acordion';
import Card from './card';
import Carrusel from './carrusel';
import Modal from './modal';
import Chart from './chart';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const [activeKey, setActiveKey] = useState(4);

  return (
    <div className="Container">
      <CNavbar colorScheme="light" className="bg-light Navbar">
        <CContainer fluid>
          <CNavbarBrand></CNavbarBrand>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
          <COffcanvas
            id="offcanvasNavbar"
            placement="end"
            portal={false}
            visible={visible}
            onHide={() => setVisible(false)}
            backdrop={false}
            className="Menu"
          >
            <COffcanvasHeader>
              <COffcanvasTitle>Menu</COffcanvasTitle>
              <CCloseButton
                className="text-reset"
                onClick={() => setVisible(false)}
              />
            </COffcanvasHeader>

            <COffcanvasBody>
              {/* <CNavbarNav>
              <CNavItem>
                <CNavLink href="#">Hola</CNavLink>
              </CNavItem>
            </CNavbarNav> */}

              <TabMenu activeKey={activeKey} setActiveKey={setActiveKey} />
            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>

      <CTabContent className="Container-content">
        <CTabPane
          role="tabpanel"
          aria-labelledby="home-tab-pane"
          visible={activeKey === 1}
        >
          <Acordion></Acordion>
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="profile-tab-pane"
          visible={activeKey === 2}
        >
          <Carrusel></Carrusel>
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="contact-tab-pane"
          visible={activeKey === 3}
        >
          <Modal></Modal>
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="disabled-tab-pane"
          visible={activeKey === 4}
        >
          <Chart></Chart>
        </CTabPane>
      </CTabContent>
    </div>
  );
};

export default Menu;
