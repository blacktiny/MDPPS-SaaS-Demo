import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container, Header, Content } from 'rsuite';
import RouteWithSubRoutes from './global/components/RouteWithSubRoutes';
import routes from './global/utils/Routes';
import 'rsuite/lib/styles/index.less';
import './global/styles/globalStyle.less';
import './global/styles/App.less';

function App() {
  return (
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
  );
}

export default App;
