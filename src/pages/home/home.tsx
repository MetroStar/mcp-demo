import { Alert } from '@metrostar/comet-uswds';
import React from 'react';
import useAuth from '../../hooks/use-auth';

export const Home = (): React.ReactElement => {
  const { isSignedIn } = useAuth();
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Welcome Home</h1>
        </div>
      </div>
      {!isSignedIn && (
        <div className="grid-row">
          <div className="grid-col">
            <Alert id="sign-in-alert" type="info">
              You are not currently signed in. Please Sign In to access the
              Dashboard.
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
};
