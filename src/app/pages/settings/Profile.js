import React from 'react';
import styled from 'styled-components';
import ProfileBGImgURL from '../../assets/images/profile_background.png';
import ProfileAvatarURL from '../../assets/images/Jamie_Jones.svg';

function Profile() {

  return (
    <SettingsProfile>
      <ProfileBackgroundImage imgURL={ProfileBGImgURL} />
      <AvatarContainer>
        <ProfileAvatar src={ProfileAvatarURL} alt="avatar" />
      </AvatarContainer>
    </SettingsProfile>
  );
}

export default Profile;

const SettingsProfile = styled.div`
`;

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

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 115px;
  position: absolute;
  // background: #ffffff;
  margin: -60px 0 0 145px;
  // border-radius: 50%;
  z-index: 2;
`;

const ProfileAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
