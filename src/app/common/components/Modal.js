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
    );
  }

  return (
    <Modal
      dialogClassName="MDPPS-modal none-fullscreen"
      show={show}
      onHide={onClosed}
      {...restProps}
    >
      {children}
    </Modal>
  );
}

export default MDPPSModal;
