import React, { Component } from 'react';
import './Showcase.css'

class Showcase extends Component {
    render() {
        return (
            <div id="showcase_div">
                <h1 className="div_heading">Features</h1>
                <div id="showcase_list_div">
                    <div className="showcase_item_div">
                        <div className="showcase_image_div">
                            <img src="/assets/img/code.svg" alt="Code" />
                        </div>
                        <div className="showcase_text_div">
                            <h1>Lightweight</h1>
                            <p className="div_subheading left">This template was coded with organised, reliable code to ensure fast load times and optimum usability.</p>
                        </div>
                    </div>
                    <div className="showcase_item_div">
                        <div className="showcase_image_div">
                            <img src="/assets/img/touch.svg" alt="Touch" />
                        </div>
                        <div className="showcase_text_div">
                            <h1>Responsive</h1>
                            <p className="div_subheading left">Smartphone and tablet users are visiting websites more often than computer users. This template is designed to look great on any screen size.</p>
                        </div>
                    </div>
                    <div className="showcase_item_div">
                        <div className="showcase_image_div">
                            <img src="/assets/img/dash.svg" alt="Dash" />
                        </div>
                        <div className="showcase_text_div">
                            <h1>Clean</h1>
                            <p className="div_subheading left">We took extra time and throught to produce a design that is free of clutter and wasted space.</p>
                        </div>
                    </div>
                    <div className="showcase_item_div">
                        <div className="showcase_image_div">
                            <img src="/assets/img/star.svg" alt="Star"/>
                        </div>
                        <div className="showcase_text_div">
                            <h1>Modern</h1>
                            <p className="div_subheading left">This template will keep your website looking new and fresh. We have implemented the most current design standards to make sure your product shines through.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Showcase;