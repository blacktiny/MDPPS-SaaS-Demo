import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Content, Container, Header, Icon, Divider } from 'rsuite';
import {
  InputGroup,
  TextInputItem,
  TextareaInputItem,
  SelectPickerItem,
  SelectCustomPickerItem,
  ButtonItem
} from '../../common/components';
import SocialAccountList from './components/SocialAccountList';
import CompanyBGImgURL from '../../assets/images/company_background.svg';
import CompanyAvatarURL from '../../assets/images/company_FASS.png';
import { Camera, PreviewProfile } from '../../assets/icons';
import {
  AllSocialAccounts,
  BusinessEntityTypeSelectData,
  TaxIDTypeSelectData,
  AnnualRevenueSelectData,
  AnnualMarketingBudgetSelectData,
  EmployeesNumSelectData,
  HeadquartersSelectData,
  OriginSelectData
} from '../../common/utils/constants';
import { saveProfile } from '../../common/actions'

function Company() {
  const [legalName, setLegalName] = useState('FASS Diesel Performance Products, Inc.')
  const [dba, setDba] = useState('')
  const [prevKnown, setPrevKnown] = useState('')
  const [companyPage, setCompanyPage] = useState('')
  const [businessType, setBusinessType] = useState('llc')
  const [taxIDType, setTaxIDType] = useState('ein')
  const [taxIDNumber, setTaxIDNumber] = useState('238273827683')
  const [yearEstablished, setYearEstablished] = useState('1988')
  const [revenue, setRevenue] = useState('revenue4')
  const [marketing, setMarketing] = useState('marketing3')
  const [employeesNum, setEmployeesNum] = useState('employee5')
  const [about, setAbout] = useState('')
  const [website, setWebsite] = useState('https://www.fass.com')
  const [socialAccounts, setSocialAccounts] = useState(AllSocialAccounts)
  const [quarterAddrType, setQuarterAddrType] = useState('headquarters')
  const [quarterAddress, setQuarterAddress] = useState('')
  const [originType, setOriginType] = useState('made')
  const [originAddress, setOriginAddress] = useState('')
  const [isAllValidate, setIsAllValidate] = useState(false)

  // handler for the input item change event
  const inputItemChanged = useCallback((value, setFunc) => setFunc(value), [])

  // do all validate
  const allValidate = useMemo(() => {
    const newAllValidate = []

    // Legal Name
    if (!legalName) {
      newAllValidate.push({
        type: 'Legal Name',
        msg: ' is required'
      })
    }
    // Company Page
    if (!companyPage) {
      newAllValidate.push({
        type: 'Company Page',
        msg: ' name is already in use'
      })
    }
    // Business Entity Type
    if (!businessType) {
      newAllValidate.push({
        type: 'Entity Type',
        msg: ' is required'
      })
    }
    // Tax ID Type
    if (!taxIDType && !taxIDNumber) {
      newAllValidate.push({
        type: 'EIN or SSN',
        msg: ' is incorrect'
      })
    }

    // setAllValidate(newAllValidate)
    return newAllValidate
  }, [
    legalName, companyPage, businessType, taxIDType, taxIDNumber
  ])

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
              <Col xs={22} xsPull={1} xsPush={1} sm={20} smPull={2} smPush={2} md={18} mdPull={3} mdPush={3}>
                <InputGroup title={'Company Information'}>
                  <TextInputItem
                    title={'Legal Name'}
                    value={legalName}
                    onChanged={value => inputItemChanged(value, setLegalName)}
                    extraContentEle={(
                      <div className="Modal-link-btn">Change</div>
                    )}
                    doValidate={isAllValidate}
                    required
                  />
                  <TextInputItem
                    title={'DBA'}
                    value={dba}
                    placeholder={'Doing Business As'}
                    onChanged={value => inputItemChanged(value, setDba)}
                  />
                  <TextInputItem
                    title={'Previously Known as'}
                    value={prevKnown}
                    placeholder={`Your company's previous name`}
                    onChanged={value => inputItemChanged(value, setPrevKnown)}
                  />
                  <TextInputItem
                    title={'Company Page'}
                    value={companyPage}
                    placeholder={'pagename'}
                    onChanged={value => inputItemChanged(value, setCompanyPage)}
                    extraContentEle={(
                      <div className="Input-description">Unique company page name</div>
                    )}
                    inputPrefixEle={(
                      <div className="Input-username">
                        htpps://mdpps.com/c/
                      </div>
                    )}
                    doValidate={isAllValidate}
                    required
                    errorMsg={'This name is already in use, please chose another'}
                  />
                  <SelectPickerItem
                    title={'Business Entity Type'}
                    value={businessType}
                    data={BusinessEntityTypeSelectData}
                    // eslint-disable-next-line no-unused-vars
                    onChange={(value, _event) => setBusinessType(value)}
                    required
                  />
                  <Row>
                    <Col xs={24} md={8} lg={7}>
                      <SelectPickerItem
                        title={'Tax ID Number'}
                        value={taxIDType}
                        data={TaxIDTypeSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setTaxIDType(value)}
                        required
                      />
                    </Col>
                    <Col xs={24} md={15} mdPush={1} lg={16} lgPush={1}>
                      <TextInputItem
                        title={''}
                        value={taxIDNumber}
                        placeholder={'Tax ID Number'}
                        onChanged={value => inputItemChanged(value, setTaxIDNumber)}
                        required
                        errorMsg={'Please enter your tax ID number'}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} md={8} lg={7}>
                      <TextInputItem
                        title={'Year Established'}
                        value={yearEstablished}
                        placeholder={'Enter year'}
                        onChanged={value => inputItemChanged(value, setYearEstablished)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} lg={7}>
                      <SelectPickerItem
                        title={'Annual Revenue'}
                        value={revenue}
                        data={AnnualRevenueSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setRevenue(value)}
                      />
                    </Col>
                    <Col xs={24} lg={7} lgPush={1}>
                      <SelectPickerItem
                        title={'Annual Marketing Budget'}
                        value={marketing}
                        data={AnnualMarketingBudgetSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setMarketing(value)}
                      />
                    </Col>
                    <Col xs={24} lg={8} lgPush={2}>
                      <SelectPickerItem
                        title={'Number of Employees'}
                        value={employeesNum}
                        data={EmployeesNumSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setEmployeesNum(value)}
                      />
                    </Col>
                  </Row>
                  <TextareaInputItem
                    title={'About'}
                    value={about}
                    onChanged={value => inputItemChanged(value, setAbout)}
                  />
                  <TextInputItem
                    title={'Website'}
                    value={website}
                    placeholder={'Your company EIN or SSN'}
                    onChanged={value => inputItemChanged(value, setWebsite)}
                    required
                    errorMsg={'Entered URL is incorrect'}
                  />
                  <SocialAccountList
                    data={socialAccounts}
                    onChanged={setSocialAccounts}
                  />
                  <Row>
                    <Col xs={24} md={8} lg={7}>
                      <SelectCustomPickerItem
                        title={'Headquarters / Territory'}
                        value={quarterAddrType}
                        data={HeadquartersSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setQuarterAddrType(value)}
                      />
                    </Col>
                    <Col xs={24} md={15} mdPush={1} lg={16} lgPush={1}>
                      <TextInputItem
                        title={''}
                        value={quarterAddress}
                        placeholder={'e.g. Cupertino, CA'}
                        onChanged={value => inputItemChanged(value, setQuarterAddress)}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} md={8} lg={7}>
                      <SelectCustomPickerItem
                        title={'Origin'}
                        value={originType}
                        data={OriginSelectData}
                        // eslint-disable-next-line no-unused-vars
                        onChange={(value, _event) => setOriginType(value)}
                      />
                    </Col>
                    <Col xs={24} md={15} mdPush={1} lg={16} lgPush={1}>
                      <TextInputItem
                        title={''}
                        value={originAddress}
                        placeholder={'e.g. United States'}
                        onChanged={value => inputItemChanged(value, setOriginAddress)}
                        required
                      />
                    </Col>
                  </Row>
                </InputGroup>
              </Col>

              <Col xs={22} xsPull={1} xsPush={1} sm={20} smPull={2} smPush={2} md={18} mdPull={3} mdPush={3}>
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
                            )
                          })}
                        </ul>
                      </Content>
                      <Divider />
                    </Container>
                  )}
                  <div className="profile-submit-btn-group">
                    <div
                      className={"All-validate-btn " + (allValidate.length > 0 ? 'has-error' : '')}
                      onClick={() => {
                        setIsAllValidate(!isAllValidate)
                      }}
                    >
                      <Icon icon={isAllValidate ? 'eye-slash' : 'eye'} />
                    </div>
                    <div className="btn-group">
                      <ButtonItem
                        className="Cancel-btn"
                        appearance="default"
                        title="Cancel"
                      />
                      <ButtonItem
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
}))(Company);

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
