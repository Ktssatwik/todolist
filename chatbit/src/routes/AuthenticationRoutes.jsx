// import { lazy } from 'react';

// // project imports
// import Loadable from 'ui-component/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';

// // maintenance routing
// const LoginPage = Loadable(lazy(() => import('views/pages/authentication/Login')));
// const RegisterPage = Loadable(lazy(() => import('views/pages/authentication/Register')));

// // ==============================|| AUTHENTICATION ROUTING ||============================== //

// const AuthenticationRoutes = {
//   path: '/',
//   // element: <MinimalLayout />,
//   children: [
//     {
//       path: 'login',
//       element: <LoginPage />
//     },
//     {
//       path: 'register',
//       element: <RegisterPage />
//     }
//   ]
// };

// export default AuthenticationRoutes;

import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import BlockLoginAndRegister from './BlockLoginAndRegister'; // adjust path if needed

const LoginPage = Loadable(lazy(() => import('views/pages/authentication/Login')));
const RegisterPage = Loadable(lazy(() => import('views/pages/authentication/Register')));
const ForgotPasswordPage = Loadable(lazy(() => import('views/pages/authentication/ForgotPassword')));
const NewPasswordPage = Loadable(lazy(() => import('views/pages/authentication/NewPassword')));
// // ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  children: [
    {
      path: 'login',
      element: (
        //login page tab hi access hoga jab ap log in nahi ho, isliye BlockLoginAndRegister can use wrap kiya
        <BlockLoginAndRegister>
          <LoginPage />
        </BlockLoginAndRegister>
      )
    },
    {
      path: 'register',
      element: (
        //register page tab hi access hoga jab ap log in nahi ho, isliye BlockLoginAndRegister can use wrap kiya
        <BlockLoginAndRegister>
          <RegisterPage />
        </BlockLoginAndRegister>
      )
    },
    {
      path: 'forgotPassword',
      element: (
        //forgot password page tab hi access hoga jab ap log in nahi ho, isliye BlockLoginAndRegister can use wrap kiya
        <BlockLoginAndRegister>
          <ForgotPasswordPage />
        </BlockLoginAndRegister>
      )
    },
    {
      path: 'newPassword',
      element: (
        //new password page tab hi access hoga jab ap log in nahi ho, isliye BlockLoginAndRegister can use wrap kiya
        <BlockLoginAndRegister>
          <NewPasswordPage />
        </BlockLoginAndRegister>
      )
    }
  ]
};

export default AuthenticationRoutes;
