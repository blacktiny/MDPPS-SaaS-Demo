import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container, Header, Content } from 'rsuite';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';
import routes from './common/utils/Routes';
import store from './common/store'
import 'rsuite/lib/styles/index.less';
import './common/styles/App.less';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container className="App">
          <Header className="App-header"></Header>
          <Content className="App-content">
            <Switch>
              {routes.map((route, i) => {
                return <RouteWithSubRoutes key={i} {...route} />;
              })}
            </Switch>
          </Content>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
