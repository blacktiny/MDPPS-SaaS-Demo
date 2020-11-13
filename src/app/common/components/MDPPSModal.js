import React from 'react';
import { Container, Modal, Icon } from 'rsuite';

function MDPPSModal(props) {
  const { children, show, onClosed, fullscreen, ...restProps } = props;

  if (!show) return <></>;

  if (fullscreen) {
    return (
      <Container className="MDPPS-modal fullscreen">
        {children}
        <div className="MDPPS-modal-close-btn" onClick={onClosed}>
          <Icon icon="close" />
        </div>
      </Container>
    )
  }

  return (
    <Container className="MDPPS-modal" onClick={onClosed}>
      <Modal {...restProps} onHide={onClosed}>
        {children}
      </Modal>
    </Container>
  );
}

export default MDPPSModal;
