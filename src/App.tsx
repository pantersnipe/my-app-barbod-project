import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'Auth/AuthProvider';
import CustomThemeProvider from 'theme/customthemeProvider';
import Routes from 'routes/Routes';

function App() {
  return <Router>
    <AuthProvider>
      <CustomThemeProvider >
        <Routes />
      </CustomThemeProvider>
    </AuthProvider>
  </Router>;
}

export default App;
