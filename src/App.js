import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
