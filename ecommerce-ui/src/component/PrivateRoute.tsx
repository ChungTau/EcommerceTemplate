import React from 'react';
import { useAuth } from 'react-oidc-context';
import FallbackSpinner from './FallbackSpinner';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <FallbackSpinner/>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    let originPath = window.location.pathname;
    auth.signinRedirect({
      redirect_uri: process.env.REACT_APP_PROJECT_URL?.concat(originPath),
    });
    return null; // Returning null to prevent rendering children while redirecting
  }

  if (auth.isAuthenticated) {
    window.history.replaceState({}, document.title, window.location.pathname);
    return <>{children}</>;
  }

  return null; // Default case to return null
};

export default PrivateRoute;
