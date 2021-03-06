import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Row,
  Col,
  Content,
  Container,
  Header,
  Icon,
  Divider,
} from 'rsuite';
import {
  InputGroup,
  PhoneNumberInput,
  TextInput,
  Textarea,
  DatePicker,
  SelectPickerItem,
  TimezonePicker,
  Button,
} from '../../common/components';
import SocialAccountList from './components/SocialAccountList';
import EditImageModal from './components/EditImageModal';
import EmailChangeModal from './components/EmailChangeModal';
import PhoneChangeModal from './components/PhoneChangeModal';
import ProfileBGImgURL from '../../assets/images/profile_background.png';
import ProfileAvatarURL from '../../assets/images/Jamie_Jones.svg';
import {
  Camera,
  PreviewProfile,
  InputEye,
  InputVerified,
} from '../../assets/icons';
import {
  CurrencySelectData,
  LanguageSelectData,
  AllSocialAccounts,
} from '../../common/utils/constants';
import { saveProfile } from '../../common/actions';

function Profile(props) {
  const { profile, saveProfile } = props;
  const { emailAddress, mobilePhone } = profile;

  const [userName, setUserName] = useState('jamiejones');
  const [curPwd, setCurPwd] = useState('');
  const [isCurPwdShowed, setIsCurPwdShowed] = useState(false);
  const [newPwd, setNewPwd] = useState('');
  const [isNewPwdShowed, setIsNewPwdShowed] = useState(false);
  const [pwdStrength, setPwdStrength] = useState('Weak');
  const [firstName, setFirstName] = useState('Jamie');
  const [lastName, setLastName] = useState('Jones');
  const [birthDate, setBirthDate] = useState(new Date());
  const [jobTitle, setJobTitle] = useState('National Sales Manager');
  const [officePhone, setOfficePhone] = useState('+13093396341');
  const [about, setAbout] = useState('');
  const [socialAccounts, setSocialAccounts] = useState(AllSocialAccounts);
  const [language, setLanguage] = useState('english');
  const [currency, setCurrency] = useState('usd');
  const [timezone, setTimezone] = useState('');
  const [isAllValidate, setIsAllValidate] = useState(false);
  const [showEditCoverImageModal, setShowEditCoverImageModal] = useState(false);
  const [showEditProfileImageModal, setShowEditProfileImageModal] = useState(
    false
  );
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showChangePhoneModal, setShowChangePhoneModal] = useState(false);

  // handler for the Password strength input event
  useEffect(() => {
    if (newPwd) {
      if (newPwd.length < 4) setPwdStrength('Weak');
      else if (newPwd.length < 8) setPwdStrength('Moderate');
      else if (newPwd.length >= 8) setPwdStrength('Strong');
    }
  }, [newPwd]);

  // handler for the input item change event
  const inputItemChanged = useCallback((value, setFunc) => setFunc(value), []);

  // do all validate
  const allValidate = useMemo(() => {
    const newAllValidate = [];

    // Username
    if (!userName) {
      newAllValidate.push({
        type: 'Username',
        msg: ' is already in use',
      });
    }
    // First Name
    if (!firstName) {
      newAllValidate.push({
        type: 'First name',
        msg: ' is required',
      });
    }
    // Last Name
    if (!lastName) {
      newAllValidate.push({
        type: 'Last name',
        msg: ' is required',
      });
    }
    // Date of Birth
    if (!birthDate) {
      newAllValidate.push({
        type: 'Date of birth',
        msg: ' is required',
      });
    }
    // Job Title
    if (!jobTitle) {
      newAllValidate.push({
        type: 'Job title',
        msg: ' is required',
      });
    }
    // Office Phone Number
    if (!officePhone) {
      newAllValidate.push({
        type: 'Office phone number',
        msg: ' is required',
      });
    }

    // setAllValidate(newAllValidate)
    return newAllValidate;
  }, [userName, firstName, lastName, birthDate, jobTitle, officePhone]);

  return (
    <div className="Settings-profile">
      <ProfileBackgroundImage imgURL={ProfileBGImgURL} />
      <div
        className="Background-change-btn"
        onClick={() => setShowEditCoverImageModal(true)}
      >
        <Camera />
      </div>

      <Container className="Profile-container">
        <Header className="row Profile-header">
          <div className="Avatar-container">
            <img className="Avatar-img" src={ProfileAvatarURL} alt="avatar" />
            <div
              className="Avatar-change-btn"
              onClick={() => setShowEditProfileImageModal(true)}
            >
              <Camera />
            </div>
          </div>
          <div className="col Right-side">
            <div className="Profile-name">Jamie Jones</div>
            <div className="row Preview-profile">
              <Link to={'/'} className="Preview-profile-link">
                Preview profile
              </Link>
              <PreviewProfile />
            </div>
          </div>
        </Header>

        <Content className="Profile-content">
          <Grid fluid>
            <Row>
              <Col
                xs={22}
                xsPull={1}
                xsPush={1}
                sm={20}
                smPull={2}
                smPush={2}
                md={18}
                mdPull={3}
                mdPush={3}
              >
                <InputGroup title={'Account'}>
                  <TextInput
                    title={'Email Address'}
                    value={emailAddress}
                    extraContentEle={
                      <div
                        className="Modal-link-btn"
                        onClick={() => setShowChangeEmailModal(true)}
                      >
                        Change
                      </div>
                    }
                    inputSuffixEle={
                      <div className="verified">
                        <InputVerified />
                      </div>
                    }
                    doValidate={isAllValidate}
                    disabled
                  />
                  <PhoneNumberInput
                    title={'Mobile Number'}
                    value={mobilePhone}
                    extraContentEle={
                      <div
                        className="Modal-link-btn phone-number"
                        onClick={() => setShowChangePhoneModal(true)}
                      >
                        Change
                      </div>
                    }
                    inputSuffixEle={
                      <div className="verified">
                        <InputVerified />
                      </div>
                    }
                    disabled
                    errorMsg={'Please enter your office number'}
                  />
                  <TextInput
                    title={'Username'}
                    value={userName}
                    placeholder={'Userid'}
                    onChanged={value => inputItemChanged(value, setUserName)}
                    extraContentEle={
                      <div className="Input-description">
                        Unique profile name on [platform name]
                      </div>
                    }
                    inputPrefixEle={
                      <div className="Input-username">htpps://mdpps.com/u/</div>
                    }
                    doValidate={isAllValidate}
                    required
                    errorMsg={'This username is already in use'}
                  />
                  <TextInput
                    type={isCurPwdShowed ? 'text' : 'password'}
                    title={'Current Password'}
                    value={curPwd}
                    placeholder={
                      'Leave empty if you do not want to change your password'
                    }
                    onChanged={value => inputItemChanged(value, setCurPwd)}
                    extraContentEle={
                      <div className="Modal-link-btn">
                        I forgot my current password
                      </div>
                    }
                    inputSuffixEle={
                      <div
                        className="Input-password"
                        onClick={() => setIsCurPwdShowed(!isCurPwdShowed)}
                      >
                        <InputEye />
                      </div>
                    }
                    doValidate={isAllValidate}
                  />
                  <TextInput
                    type={isNewPwdShowed ? 'text' : 'password'}
                    title={'New Password'}
                    value={newPwd}
                    onChanged={value => inputItemChanged(value, setNewPwd)}
                    extraContentEle={
                      newPwd && (
                        <div className="Password-strength">
                          <div className="Password-strength-container">
                            <div className={pwdStrength}></div>
                          </div>
                          <span>{pwdStrength}</span>
                        </div>
                      )
                    }
                    inputSuffixEle={
                      <div
                        className="Input-password"
                        onClick={() => setIsNewPwdShowed(!isNewPwdShowed)}
                      >
                        <InputEye />
                      </div>
                    }
                    tooltip={
                      'Minimum of 8 characters containing at least one upper case letter, a symbol and a number'
                    }
                    doValidate={isAllValidate}
                  />
                </InputGroup>
              </Col>

              <Col
                xs={22}
                xsPull={1}
                xsPush={1}
                sm={20}
                smPull={2}
                smPush={2}
                md={18}
                mdPull={3}
                mdPush={3}
              >
                <InputGroup title={'Personal Information'}>
                  <TextInput
                    title={'First Name'}
                    value={firstName}
                    onChanged={value => inputItemChanged(value, setFirstName)}
                    required
                    errorMsg={'Please enter your first name'}
                  />
                  <TextInput
                    title={'Last Name'}
                    value={lastName}
                    onChanged={value => inputItemChanged(value, setLastName)}
                    required
                    errorMsg={'Please enter your last name'}
                  />
                  <DatePicker
                    title={'Date of Birth'}
                    value={birthDate}
                    onChanged={setBirthDate}
                    required
                  />
                  <TextInput
                    title={'Job Title'}
                    value={jobTitle}
                    placeholder={'Your job title'}
                    onChanged={value => inputItemChanged(value, setJobTitle)}
                    required
                    errorMsg={'Please enter your job title'}
                  />
                  <PhoneNumberInput
                    title={'Office Phone Number'}
                    value={officePhone}
                    onChanged={setOfficePhone}
                    required
                    errorMsg={'Please enter your office number'}
                  />
                  <Textarea
                    title={'About'}
                    value={about}
                    onChanged={value => inputItemChanged(value, setAbout)}
                  />
                  <SocialAccountList
                    data={socialAccounts}
                    onChanged={setSocialAccounts}
                  />
                </InputGroup>
              </Col>

              <Col
                xs={22}
                xsPull={1}
                xsPush={1}
                sm={20}
                smPull={2}
                smPush={2}
                md={18}
                mdPull={3}
                mdPush={3}
              >
                <InputGroup title={'Localization'}>
                  <Row>
                    <Col xs={24} sm={11}>
                      <SelectPickerItem
                        title={'Language'}
                        value={language}
                        data={LanguageSelectData}
                        onChange={(value, _event) => setLanguage(value)}
                      />
                    </Col>
                    <Col xs={24} sm={11} smPush={2}>
                      <SelectPickerItem
                        title={'Currency'}
                        value={currency}
                        data={CurrencySelectData}
                        onChange={(value, _event) => setCurrency(value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <TimezonePicker
                        onChange={(value, _event) => setTimezone(value)}
                        title={'Time Zone'}
                        value={timezone}
                      />
                    </Col>
                  </Row>
                </InputGroup>
              </Col>

              <Col
                xs={22}
                xsPull={1}
                xsPush={1}
                sm={20}
                smPull={2}
                smPush={2}
                md={18}
                mdPull={3}
                mdPush={3}
              >
                <div className="col">
                  {isAllValidate && (
                    <Container className="Validate-list">
                      <Header className="Validate-list-header">
                        <h4>Please address the following errors:</h4>
                      </Header>
                      <Content>
                        <ul className="Validate-list-content">
                          {allValidate.map((validate, index) => {
                            return (
                              <li key={index}>
                                <span>{validate.type}</span>
                                <span>{validate.msg}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </Content>
                      <Divider />
                    </Container>
                  )}
                  <div className="profile-submit-btn-group">
                    <div
                      className={
                        'All-validate-btn ' +
                        (allValidate.length > 0 ? 'has-error' : '')
                      }
                      onClick={() => {
                        setIsAllValidate(!isAllValidate);
                      }}
                    >
                      <Icon icon={isAllValidate ? 'eye-slash' : 'eye'} />
                    </div>
                    <div className="btn-group">
                      <Button
                        className="Default-btn"
                        appearance="default"
                        title="Cancel"
                      />
                      <Button
                        className="Save-btn"
                        appearance="primary"
                        title="Save Changes"
                        onClick={() => saveProfile()}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>

      <EditImageModal
        src={ProfileBGImgURL}
        show={showEditCoverImageModal}
        onClosed={() => setShowEditCoverImageModal(false)}
      />
      <EditImageModal
        src={ProfileAvatarURL}
        show={showEditProfileImageModal}
        type="profile"
        onClosed={() => setShowEditProfileImageModal(false)}
      />
      <EmailChangeModal
        show={showChangeEmailModal}
        onClosed={() => setShowChangeEmailModal(false)}
      />
      <PhoneChangeModal
        show={showChangePhoneModal}
        onClosed={() => setShowChangePhoneModal(false)}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    common: state.common,
    profile: state.profile,
  };
}

export default connect(mapStateToProps, dispatch => ({
  dispatch,
  ...bindActionCreators(
    {
      saveProfile,
    },
    dispatch
  ),
}))(Profile);

const ProfileBackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background-image: url(${props => props.imgURL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border-radius: 4px 4px 0 0;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 86px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%
    );
  }
`;
