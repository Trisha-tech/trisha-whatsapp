import React from "react";


//1038609851610-ov4dup1s3mnp5898s7gvl7rtgc5p91qp.apps.googleusercontent.com    ----Client ID
//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   ----Client secret


import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  const clientId ="1038609851610-ov4dup1s3mnp5898s7gvl7rtgc5p91qp.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
