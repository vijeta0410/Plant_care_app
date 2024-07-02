import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App';
import { UserProvider } from '../src/components/UserContext'; // Import the UserProvider component

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap your App component with UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>
);
