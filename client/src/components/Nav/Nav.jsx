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

                        {this.props.navItems.map((item, i) => {
                            return (
                                <li key={i} className="nav_list_item">
                                    <a href={item.href}>{item.page}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;