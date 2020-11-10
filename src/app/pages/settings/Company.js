import React from 'react';
import styled from 'styled-components';
import CompanyBGImgURL from '../../assets/images/company_background.svg';
import CompanyAvatarURL from '../../assets/images/company_FASS.png';

function Company() {

  return (
    <SettingsCompany>
      <CompanyBackgroundImage imgURL={CompanyBGImgURL} />
      <AvatarContainer>
        <CompanyAvatar src={CompanyAvatarURL} alt="avatar" />
      </AvatarContainer>
    </SettingsCompany>
  );
}

export default Company;

const SettingsCompany = styled.div`
`;

const CompanyBackgroundImage = styled.div`
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
  background: #ffffff;
  margin: -60px 0 0 145px;
  border-radius: 20px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  z-index: 2;
`;

const CompanyAvatar = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
`;
