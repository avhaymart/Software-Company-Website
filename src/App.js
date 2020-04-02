import React, { Component } from 'react';
import './App.css';

import Container from './components/Container';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Programs from './components/Programs';
import Footer from './components/Footer';

import navItems from './nav.json';
import programs from './programs.json';
import showcase from './showcase.json';
import footer from './footer.json';

class App extends Component {
  render() {
    return (
      <Container>
        <Hero 
          navItems={navItems.navItems}
        />
        <Showcase showcase={showcase.showcase} />
        <Programs programs={programs.programs} />
        <Footer footer={footer}/>
      </Container>
    );
  }
}

export default App;
