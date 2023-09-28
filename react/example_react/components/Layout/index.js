import PropTypes from 'prop-types';
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
} from '@coreui/react';
import { useState } from 'react';
import Menu from '../Menu';

const Layout = (props) => {
  const { children } = props;

  const [visible, setVisible] = useState(true);

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
        </CContainer>
      </CNavbar>

      <div className="Container-content">
        <div className="Container-options">{children}</div>
      </div>

      <Menu visible={visible} setVisible={setVisible}></Menu>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
