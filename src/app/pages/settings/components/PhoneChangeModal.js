import React, { useMemo, useState } from 'react';
import { Modal } from 'rsuite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  PhoneNumberInputItem,
  Modal as MDPPSModal,
} from '../../../common/components';
import { OTPCodeInputPage, FinishPage } from './EmailChangeModal';
import { changeEmail, finishEmailChange } from '../../../common/actions';

function PhoneInputPage(props) {
  const { onNext, onClosed } = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [isValidated, setIsValidated] = useState(false)

  return (
    <div className="Email-change-input">
      <Modal.Header>
        <Modal.Title>Change Phone Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: 14, lineHeight: '25px', color: 'black' }}>
          Enter the new phone number you would like to associate with your
          account below. We’ll send a One Time Password (OTP) to that number.
        </p>
        <PhoneNumberInputItem
          value={phoneNumber}
          placeholder={'Enter your new phone number'}
          errorMsg={'Please enter a valid phone number'}
          onChange={setPhoneNumber}
          // doValidate={isValidated}
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="btn-group">
          <Button
            className="Default-btn"
            appearance="default"
            title="Cancel"
            onClick={() => onClosed()}
          />
          <Button
            className="Save-btn"
            appearance="primary"
            title="Next"
            onClick={() => onNext(phoneNumber)}
          />
        </div>
      </Modal.Footer>
    </div>
  );
}

function PhoneChangeModal(props) {
  const {
    show,
    onClosed,
    profile: { emailChangeStep },
    changeEmail,
    finishEmailChange,
  } = props;

  const modalContent = useMemo(() => {
    switch (emailChangeStep) {
      case 'email':
        return (
          <PhoneInputPage
            onNext={email =>
              changeEmail({
                step: 'email',
                email,
              })
            }
            onClosed={onClosed}
          />
        );
      case 'otp':
        return (
          <OTPCodeInputPage
            onNext={otpCode =>
              changeEmail({
                step: 'otp',
                otpCode,
              })
            }
            onClosed={onClosed}
          />
        );
      case 'finish':
        return (
          <FinishPage
            onClosed={() => {
              finishEmailChange();
              onClosed();
            }}
          />
        );
      default:
        return <>Empty</>;
    }
  }, [emailChangeStep]);

  return (
    <MDPPSModal show={show} onClosed={onClosed}>
      <div className="Email-change">{modalContent}</div>
    </MDPPSModal>
  );
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps, dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      changeEmail,
      finishEmailChange,
    },
    dispatch
  ),
}))(PhoneChangeModal);
