import React, { useEffect, useState } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { Container, Header, Content, Sidebar } from 'rsuite';
import RouteWithSubRoutes from '../../global/components/RouteWithSubRoutes';
import SettingsSidebar from './SettingsSidebar';
import { Settings as SettingsIcon } from '../../assets/icons';
import { SettingsItems } from '../../global/utils/constants'

function Settings(props) {
  const { routes, location, match: {
    params: { type }
  } } = props;
  const [curSettingItem, setCurSettingItem] = useState(null);

  useEffect(() => {
    const settingsItem = SettingsItems.find(item => item.id === type);
    setCurSettingItem(settingsItem);
  }, [location, type])

  return (
    <Container className="col Settings">
      <Header className="row Settings-header">
        <SettingsIcon />
        <p className="Group-name">Settings</p>
        &nbsp; | &nbsp;
        <h4>{curSettingItem?.name}</h4>
      </Header>

      <Container>
        <Sidebar>
          <SettingsSidebar type={curSettingItem?.id} />
        </Sidebar>
        <Content className="Settings-content">
          <Switch>
            {routes.map((route, i) => {
              return <RouteWithSubRoutes key={i} {...route} />;
            })}
          </Switch>
        </Content>
      </Container>
    </Container>
  );
}

export default withRouter(Settings);
