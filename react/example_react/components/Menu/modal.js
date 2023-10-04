import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Carrusel from './carrusel';
import Card from './card';

const Modal = (props) => {
  const { setVisible, visible, data, children } = props;

  // const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton> */}
      <CModal
        size="xl"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
        backdrop="static"
        alignment="center"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* <Card></Card> */}
          {children}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

Modal.propTypes = {
  setVisible: PropTypes.func,
  visible: PropTypes.bool,
  data: PropTypes.object,
  children: PropTypes.node,
};

Modal.defaultProps = {
  setVisible: () => {},
  visible: false,
  data: {},
  children: <></>,
};

export default Modal;
