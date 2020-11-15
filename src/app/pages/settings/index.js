import React, { useEffect, useState } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Content, Sidebar } from 'rsuite';
import RouteWithSubRoutes from '../../common/components/RouteWithSubRoutes';
import SettingsSidebar from './SettingsSidebar';
import { Settings as SettingsIcon } from '../../assets/icons';
import { SettingsItems } from '../../common/utils/constants';
import { clearSettingsNotification } from '../../common/actions';

function Settings(props) {
  const {
    routes,
    location,
    match: {
      params: { type },
    },
    common,
    clearSettingsNotification,
  } = props;
  const [curSettingItem, setCurSettingItem] = useState(null);
  const [isNewNotify, setIsNewNotify] = useState(false);

  // handler for switch settings items
  useEffect(() => {
    const settingsItem = SettingsItems.find(item => item.id === type);
    setCurSettingItem(settingsItem);
  }, [location, type]);

  // handler for settings notification
  useEffect(() => {
    if (common.isNewNotify) {
      // move to screen's top
      window.scrollTo(0, 0);

      // set notification
      setTimeout(() => {
        setIsNewNotify(true);
      }, 100);

      // clear notificationo
      setTimeout(() => {
        clearSettingsNotification();
      }, 4000);
    } else {
      setIsNewNotify(false);
    }
  }, [clearSettingsNotification, common.isNewNotify]);

  return (
    <div className="page-wrapper">
      <div className={'page-notification ' + (isNewNotify ? 'show' : '')}>
        {common.notification}
      </div>

      <Container className="col page-container Settings">
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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    common: state.common,
  };
}

export default withRouter(
  connect(mapStateToProps, dispatch => ({
    dispatch,
    ...bindActionCreators(
      {
        clearSettingsNotification,
      },
      dispatch
    ),
  }))(Settings)
);
