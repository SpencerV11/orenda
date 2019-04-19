import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Promotions from './components/Promotions/Promotions'
import Gallery from './components/Gallery/Gallery'
import Reviews from './components/Reviews/Reviews'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/promotions" component={Promotions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/services" component={Services} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
          <Footer />
      </HashRouter>
    );
  }
}

export default App;
