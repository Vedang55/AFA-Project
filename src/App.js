import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Gallery from './containers/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/gallery" component={Gallery}/>
    </BrowserRouter>
  );
}

export default App;
