import React from 'react';
import { Route as ReactRouterRoute, Redirect } from 'react-router';

export default function RouteWithSubRoutes(props) {
  const { redirect, component: Component, path, ...restProps } = props;

  if (redirect) {
    return <Redirect {...restProps} />;
  }

  return (
    <ReactRouterRoute
      path={path}
      render={routerProps => {
        return <Component {...routerProps} {...restProps} />;
      }}
    />
  );
}
