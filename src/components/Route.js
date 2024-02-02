import { Navigate } from 'react-router-dom';
import { useAuth } from './UseAut/UseAut';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './UseAut/UseAut';

// const PrivateRoute = ({ element: Element, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return (
//     <Route
//       element={shouldRedirect ? <Navigate to={redirectTo} /> : <Element />}
//     />
//   );
// };

// export default PrivateRoute;


