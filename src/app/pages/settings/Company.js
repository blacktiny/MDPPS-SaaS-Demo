import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col, Content, Container, Header } from 'rsuite';
import CompanyBGImgURL from '../../assets/images/company_background.svg';
import CompanyAvatarURL from '../../assets/images/company_FASS.png';
import { Camera, PreviewProfile } from '../../assets/icons';

function Company() {

  return (
    <div className="Settings-company">
      <CompanyBackgroundImage imgURL={CompanyBGImgURL} />
      <div className="Background-change-btn">
        <Camera />
      </div>
      
      <Container className="Profile-container company">
        <Header className="row Profile-header">
          <div className="Avatar-container">
            <img className="Avatar-img" src={CompanyAvatarURL} alt="avatar" />
            <div className="Avatar-change-btn">
              <Camera />
            </div>
          </div>
          <div className="col Right-side">
            <div className="Profile-name">FASS Diesel Performance Products, Inc.</div>
            <div className="row Preview-profile">
              <Link to={'/'} className="Preview-profile-link">Preview profile</Link>
              <PreviewProfile />
            </div>
          </div>
        </Header>

        <Content className="Profile-content">
          <Grid fluid>
            <Row>
              <Col xs={16} xsPull={4} xsPush={4}>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    </div>
  );
}

export default Company;

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
