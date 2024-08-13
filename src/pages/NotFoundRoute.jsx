import React from 'react';
import { Route } from 'react-router-dom';
import Error from '../pages/Error';

const NotFoundRoute = () => {
  return <Route path="*" element={<Error />} />;
};

export default NotFoundRoute;
