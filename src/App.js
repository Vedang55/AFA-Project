import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Gallery from './containers/Gallery/Gallery';
import Equipment from './containers/Equipment/Equipment';
import AboutUs from './containers/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/equipment" component={Equipment}/>
      <Route path="/aboutus" component={AboutUs}/>
    </BrowserRouter>
  );
}

export default App;
