import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div id="nav_bar">
                <div id="nav_logo_div">
                    <img id="nav_logo" src="/assets/img/logo.png" alt="Logo" />
                </div>
                <div id="nav_list_items_div">
                    <ul id="nav_list">
                        <li className="nav_list_item">
                            <a href="/">Platforms</a>
                        </li>
                        <li className="nav_list_item">
                            <a href="/">Support</a>
                        </li>
                        <li className="nav_list_item">
                            <a href="/">Company</a>
                        </li>
                    </ul>
                </div>
                <img id="nav_img" src="/assets/img/menu.svg" alt="Menu button"/>
            </div>
        )
    }
}

export default Nav;