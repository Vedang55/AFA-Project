import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Gallery from './containers/Gallery/Gallery';
import Equipment from './containers/Equipment/Equipment';
import AboutUs from './containers/AboutUs/AboutUs';
import Clubs from './containers/Clubs/Clubs';
import Publications from './containers/Publications/Publications'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/equipment" component={Equipment}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/clubs" component={Clubs}/>
      <Route path="/publications" component={Publications}/>

    </BrowserRouter>
  );
}

export default App;
