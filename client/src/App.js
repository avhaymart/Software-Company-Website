import React, { Component } from 'react';
import './App.css';

import Container from './components/Container';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Programs from './components/Programs';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Hero />
        <Showcase />
        <Programs />
        <Footer />
      </Container>
    );
  }
}

export default App;
