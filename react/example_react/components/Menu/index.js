import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/react';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { visible, setVisible } = props;

  return (
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

        {/* <TabMenu activeKey={activeKey} setActiveKey={setActiveKey} /> */}
      </COffcanvasBody>
    </COffcanvas>
  );
};

Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default Menu;
