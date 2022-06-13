import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';
import React, { ComponentType } from 'react';
import { Route } from 'react-router-dom';
type protectedRouteprops = {
  component: ComponentType;
  [key: string]: any;
};

const protectedRoute = ({ component, ...args }: protectedRouteprops) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
    ></Route>
  );
};

export default protectedRoute;
