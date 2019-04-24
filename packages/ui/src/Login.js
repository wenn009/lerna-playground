import React, { useEffect } from 'react';
import { logger } from '@foursquare/utils';

function Login() {
  useEffect(() => {
    logger.info('Login page loaded.');
  }, []);

  return <h1>Login</h1>;
}

export default Login;
