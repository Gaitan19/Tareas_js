import {
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavItem,
  CNavLink,
  CNavbarNav,
} from '@coreui/react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { menuOptions } from '@/constants/routes';

const Menu = (props) => {
  const { visible, setVisible } = props;
  const router = useRouter();

  const renderMenu = () => {
    return menuOptions.map((option) => {
      const isActive = router.pathname === option.route;

      return (
        // <CNavItem key={v4()} className={` ${isActive && 'Item-active'}`}>
        //   <CNavLink href={option.route}>{option.text}</CNavLink>
        // </CNavItem>
        <ListItem key={v4()} className={` ${isActive && 'Item-active'}`}>
          <ListItemButton href={option.route}>
            <ListItemText primary={option.text} />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return (
    // <COffcanvas
    //   id="offcanvasNavbar"
    //   placement="end"
    //   portal={false}
    //   visible={visible}
    //   onHide={() => setVisible(false)}
    //   backdrop={false}
    //   className="Menu"
    // >
    //   <COffcanvasHeader>
    //     <COffcanvasTitle>Menu</COffcanvasTitle>
    //     <CCloseButton
    //       className="text-reset"
    //       onClick={() => setVisible(false)}
    //     />
    //   </COffcanvasHeader>

    //   <COffcanvasBody>
    // <CNavbarNav>{renderMenu()}</CNavbarNav>
    <List>{renderMenu()}</List>

    //   </COffcanvasBody>
    // </COffcanvas>
  );
};

Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default Menu;
