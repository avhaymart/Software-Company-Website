import React, { Component } from 'react';
import Nav from '../Nav'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero_div">
                <Nav navItems={this.props.navItems}/>
                <div id="hero_text_div">
                    <h1>A powerful template in a small package.</h1>
                    <p>This is some text inside a div block.</p>
                </div>
                <div id="buttons_div">
                    <a href="/" className="button button_main">Get the app</a>
                    <a href="/" className="button">Learn more</a>
                </div>
            </div>
        )
    }
}

export default Hero;