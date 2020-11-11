import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col, Content, Container, Header } from 'rsuite';
import { InputGroup, TextInputItem } from '../../global/components';
import ProfileBGImgURL from '../../assets/images/profile_background.png';
import ProfileAvatarURL from '../../assets/images/Jamie_Jones.svg';
import { Camera, PreviewProfile, InputEye, InputVerified } from '../../assets/icons';

function Profile() {
  const [firstName, setFirstName] = useState('Jamie')
  const [lastName, setLastName] = useState('Jones')
  const [userName, setUserName] = useState('jamiejones')
  const [curPwd, setCurPwd] = useState('')
  const [isCurPwdShowed, setIsCurPwdShowed] = useState(false)
  const [newPwd, setNewPwd] = useState('')
  const [isNewPwdShowed, setIsNewPwdShowed] = useState(false)
  const [pwdStrength, setPwdStrength] = useState('Weak')

  // handler for the Password strength input event
  useEffect(() => {
    if (newPwd) {
      if (newPwd.length < 4) setPwdStrength('Weak')
      else if (newPwd.length < 8) setPwdStrength('Moderate')
      else if (newPwd.length >= 8) setPwdStrength('Strong')
    }
  }, [newPwd])

  // handler for the input item change event
  const inputItemChanged = useCallback((value, setFunc) => setFunc(value), [setFirstName, setLastName])

  return (
    <div className="Settings-profile">
      <ProfileBackgroundImage imgURL={ProfileBGImgURL} />
      <div className="Background-change-btn">
        <Camera />
      </div>

      <Container className="Profile-container">
        <Header className="row Profile-header">
          <div className="Avatar-container">
            <img className="Avatar-img" src={ProfileAvatarURL} alt="avatar" />
            <div className="Avatar-change-btn">
              <Camera />
            </div>
          </div>
          <div className="col Right-side">
            <div className="Profile-name">Jamie Jones</div>
            <div className="row Preview-profile">
              <Link to={'/'} className="Preview-profile-link">Preview profile</Link>
              <PreviewProfile />
            </div>
          </div>
        </Header>

        <Content className="Profile-content">
          <Grid fluid>
            <Row>
              <Col xs={20} xsPull={2} xsPush={2} md={18} mdPull={3} mdPush={3}>
                <InputGroup title={'Account'}>
                  <TextInputItem
                    title={'Email Address'}
                    value={'jjones@mdpps.com'}
                    extraContent={(
                      <div className="Modal-link-btn">Change</div>
                    )}
                    inputSuffixEle={(
                      <div>
                        <InputVerified />
                      </div>
                    )}
                    disabled
                  />
                  <TextInputItem
                    title={'Username'}
                    value={userName}
                    placeholder={'Userid'}
                    onChanged={value => inputItemChanged(value, setUserName)}
                    extraContent={(
                      <div className="Input-description">Unique profile name on [platform name]</div>
                    )}
                    inputPrefixEle={(
                      <div className="Input-username">
                        htpps://mdpps.com/u/
                      </div>
                    )}
                    required
                    errorMsg={'This username is already in use'}
                  />
                  <TextInputItem
                    type={isCurPwdShowed ? 'text' : 'password'}
                    title={'Current Password'}
                    value={curPwd}
                    placeholder={'Leave empty if you do not want to change your password'}
                    onChanged={value => inputItemChanged(value, setCurPwd)}
                    extraContent={(
                      <div className="Modal-link-btn">I forgot my current password</div>
                    )}
                    inputSuffixEle={(
                      <div className="Input-password" onClick={() => setIsCurPwdShowed(!isCurPwdShowed)}>
                        <InputEye />
                      </div>
                    )}
                  />
                  <TextInputItem
                    type={isNewPwdShowed ? 'text' : 'password'}
                    title={'New Password'}
                    value={newPwd}
                    onChanged={value => inputItemChanged(value, setNewPwd)}
                    extraContent={newPwd && (
                      <div className="Password-strength">
                        <div className="Password-strength-container">
                          <div className={pwdStrength}></div>
                        </div>
                        <span>{pwdStrength}</span>
                      </div>
                    )}
                    inputSuffixEle={(
                      <div className="Input-password" onClick={() => setIsNewPwdShowed(!isNewPwdShowed)}>
                        <InputEye />
                      </div>
                    )}
                    tooltip={'Minimum of 8 characters containing at least one upper case letter, a symbol and a number'}
                  />
                </InputGroup>
              </Col>
              <Col xs={20} xsPull={2} xsPush={2} md={18} mdPull={3} mdPush={3}>
                <InputGroup title={'Personal Information'}>
                  <TextInputItem
                    title={'First Name'}
                    value={firstName}
                    onChanged={value => inputItemChanged(value, setFirstName)}
                    required
                    errorMsg={'Please enter your first name'}
                  />
                  <TextInputItem
                    title={'Last Name'}
                    value={lastName}
                    onChanged={value => inputItemChanged(value, setLastName)}
                    required
                    errorMsg={'Please enter your last name'}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    </div>
  );
}

export default Profile;

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
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
`;
