import { Auth0Provider } from '@auth0/auth0-react';
import config from 'config';

import React, { PropsWithChildren } from 'react';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Auth0Provider
      domain={config.auth0Domain}
      clientId={config.auth0ClintId}
      redirectUri={window.location.origin}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
