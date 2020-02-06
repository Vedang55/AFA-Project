import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Gallery from './containers/Gallery/Gallery';
import Equipment from './containers/Equipment/Equipment';
import AboutUs from './containers/AboutUs/AboutUs';
import Clubs from './containers/Clubs/Clubs';
import Publications from './containers/Publications/Publications'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Route path="/" exact component={LandingPage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/publications" component={Publications} />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
