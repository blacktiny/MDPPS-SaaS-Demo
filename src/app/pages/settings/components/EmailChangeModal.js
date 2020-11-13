import React, { useMemo, useState } from 'react';
import { Modal } from 'rsuite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, TextInputItem, Modal as MDPPSModal } from '../../../common/components';
import { changeEmail, finishEmailChange } from '../../../common/actions'

function EmailInputPage(props) {
  const { onNext, onClosed } = props;
  const [changeEmailAddr, setChangeEmailAddr] = useState('')
  // const [isValidated, setIsValidated] = useState(false)

  return (
    <div className="Email-change-input">
      <Modal.Header>
        <Modal.Title>Change Email Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: 14, lineHeight: '25px', color: 'black' }}>
          Enter the new email address you would like to associate with your 
          account below. We’ll send a One Time Password (OTP) to that address. 
          We recommend using your company email address for verification and security.
        </p>
        <TextInputItem
          value={changeEmailAddr}
          placeholder={'Enter your new email address'}
          errorMsg={'Please enter a valid email address'}
          onChange={setChangeEmailAddr}
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
            onClick={() => onNext(changeEmailAddr)}
          />
        </div>
      </Modal.Footer>
    </div>
  )
}

export function OTPCodeInputPage(props) {
  const { onNext, onClosed } = props;
  const [otpCode, setOtpCode] = useState('')
  // const [isValidated, setIsValidated] = useState(false)

  return (
    <div className="OTP-change-input">
      <Modal.Header>
        <Modal.Title>Confirm Your Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: 14, lineHeight: '25px', color: 'black', marginBottom: 30 }}>
          For your security we need to authenticate your request. We`ve sent a One 
          Time Password (OTP) to <span style={{ fontWeight: 'bold' }}>you@companyname.com</span>. Please enter it below.
        </p>
        <TextInputItem
          title={'Enter OTP'}
          value={otpCode}
          errorMsg={'Please check your inbox and enter the OTP password given'}
          onChange={setOtpCode}
          // doValidate={isValidated}
          extraContentEle={(
            <div className="Input-description">Next OTP can be sent in 0:29</div>
          )}
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
            title="Confirm"
            onClick={() => onNext(otpCode)}
          />
        </div>
      </Modal.Footer>
    </div>
  )
}

export function FinishPage(props) {
  const { onClosed } = props;

  return (
    <div className="Finish">
      <Modal.Header>
        <Modal.Title>Thank You!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: 14, lineHeight: '25px', color: 'black', marginBottom: 30 }}>
          Your email address / phone number has been successfully changed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="btn-group">
          <Button
            className="Default-btn"
            appearance="default"
            title="Close"
            onClick={() => onClosed()}
          />
        </div>
      </Modal.Footer>
    </div>
  )
}

function EmailChangeModal(props) {
  const {
    show,
    onClosed,
    profile: {
      emailChangeStep
    },
    changeEmail,
    finishEmailChange
  } = props;

  const modalContent = useMemo(() => {
    switch (emailChangeStep) {
      case 'email':
        return (
          <EmailInputPage
            onNext={
              email => changeEmail({
                step: 'email',
                email
              })
            }
            onClosed={onClosed}
          />
        )
      case 'otp':
        return (
          <OTPCodeInputPage
            onNext={
              otpCode => changeEmail({
                step: 'otp',
                otpCode
              })
            }
            onClosed={onClosed}
          />
        )
      case 'finish':
        return (
          <FinishPage onClosed={
            () => {
              finishEmailChange()
              onClosed()
            }
          }/>
        )
      default:
        return <>Empty</>
    }
  }, [emailChangeStep])

  return (
    <MDPPSModal show={show} onClosed={onClosed}>
      <div className="Email-change">
        {modalContent}
      </div>
    </MDPPSModal>
  )
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
      finishEmailChange
    },
    dispatch
  ),
}))(EmailChangeModal);