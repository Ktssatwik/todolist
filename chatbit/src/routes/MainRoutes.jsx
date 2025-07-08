// import { lazy } from 'react';
// import { Navigate } from 'react-router-dom';

// // project imports
// import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
// import Login from '../views/pages/authentication/Login';
// import MinimalLayout from 'layout/MinimalLayout';

// // dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// // utilities routing
// const UtilsUser = Loadable(lazy(() => import('views/utilities/User')));
// const UtilsAdmin = Loadable(lazy(() => import('views/utilities/Admin')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// // sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// // ==============================|| MAIN ROUTING ||============================== //
// // const authentication = Cookies.get("access_token",token);

// const MainRoutes = {
//   path: '/',
//   element: <MainLayout />,
//   children: [
//     {
//       // path: '',
//       index: true,
//       // element: <DashboardDefault />
//       element: <Navigate to="login" replace />
//       // !authentication ? (element: <Navigate to="login" replace />) : (element : <Navigate to="/dashboard/default" replace/>);
//     },
//     {
//       path: 'dashboard',
//       children: [
//         {
//           path: 'default',
//           element: <DashboardDefault />
//         }
//       ]
//     },
//     {
//       path: 'user',
//       element: <UtilsUser />
//     },
//     {
//       path: 'admin',
//       element: <UtilsAdmin />
//     },
//     {
//       path: 'shadow',
//       element: <UtilsShadow />
//     },
//     {
//       path: '/sample-page',
//       element: <SamplePage />
//     }
//   ]
// };

// export default MainRoutes;

import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BlockDashboard from './BlockDashboard'; // ✅ add this

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsUser = Loadable(lazy(() => import('views/utilities/User')));
const UtilsAdmin = Loadable(lazy(() => import('views/utilities/Admin')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="login" replace />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: (
            // dashbord to access phahile login karna chahiye isliye BlockDashboard use kiya
            <BlockDashboard>
              <DashboardDefault />
            </BlockDashboard>
          )
        }
      ]
    },
    {
      path: 'user',
      element: <UtilsUser />
    },
    {
      path: 'admin',
      element: <UtilsAdmin />
    },
    {
      path: 'shadow',
      element: <UtilsShadow />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;

// Note: The BlockDashboard component is used to protect routes that require authentication.
// It checks for the presence of a token and redirects to the login page if not authenticated.
// Make sure to adjust the import paths based on your project structure.
// This MainRoutes configuration ensures that the dashboard and other utility pages are only accessible to authenticated users.
// If a user tries to access these pages without being logged in, they will be redirected to the login page.
// This setup provides a clear separation of concerns, allowing you to manage authentication and protected routes effectively.
// The MainRoutes object defines the main routing structure of your application, including protected routes.
// The `element` property of each route can be wrapped in a `BlockDashboard` component to enforce authentication.
