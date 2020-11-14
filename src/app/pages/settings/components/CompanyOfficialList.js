import React, { useCallback } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Grid,
  Divider,
  Row,
  Col,
} from 'rsuite';
import CompanyOfficialListItem from './CompanyOfficialListItem';
import AddSocialBtnImgURL from '../../../assets/images/add_social_btn.png';

function CompanyOfficialList(props) {
  const { data, onChanged } = props;

  // handler for official update event
  const handlerOfficialChange = useCallback(
    updatedOfficial => {
      const indexOfUpdatedOfficial = data.findIndex(
        official => official.id === updatedOfficial.id
      );

      if (updatedOfficial.member && updatedOfficial.designation) {
        // update
        data[indexOfUpdatedOfficial] = updatedOfficial;
      } else {
        // delete
        data.splice(indexOfUpdatedOfficial, 1);
      }

      onChanged(JSON.parse(JSON.stringify(data)));
    },
    [data, onChanged]
  );

  // handler for add new official event
  const handlerAddNewOfficial = useCallback(() => {
    data.push({
      id: new Date(),
      member: data[0].member,
      designation: data[0].designation,
    });
    onChanged(JSON.parse(JSON.stringify(data)));
  }, [data]);

  return (
    <Container className="Official-list">
      <Header className="Input-group-title" style={{ marginBottom: 25 }}>
        Company Officials
        <h4 style={{ color: '#0f203c', marginTop: 10 }}>
          Strengthen your company page by adding your leadership team, founders,
          and brand ambassadors
        </h4>
      </Header>

      <Content>
        <Grid fluid style={{ padding: 0 }}>
          <Row className="Official-list-content-header">
            <Col xs={24} md={16}>
              <h4>Team Member</h4>
            </Col>
            <Col xs={24} md={7} mdPush={1}>
              <h4>Designation</h4>
            </Col>
          </Row>
          {data.length > 0 &&
            data.map((official, index) => {
              return (
                <CompanyOfficialListItem
                  key={index}
                  data={official}
                  onChanged={handlerOfficialChange}
                  hasRemoveBtn={data.length > 1}
                />
              );
            })}
        </Grid>
      </Content>

      <Footer>
        <div className="Official-list-add-btn" onClick={handlerAddNewOfficial}>
          <img src={AddSocialBtnImgURL} alt="add new official" />
        </div>
      </Footer>

      <Divider />
    </Container>
  );
}

export default CompanyOfficialList;
