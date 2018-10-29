import React, { Component } from 'react';
import "./Programs.css"

class Programs extends Component {
    render() {
        return (
            <div id="programs_div">
                <h1 className="div_heading light">Our Programs</h1>
                <p className="div_subheading light">This is some text inside a div block.</p>
                <div id="programs_list_div">
                    <div className="programs_item_div">
                        <img src="/assets/img/feature_one.jpg" alt="feature one" />
                        <h1 className="div_heading light">Program One</h1>
                        <p className="div_subheading light left">Suspendisse potenti. Phasellus elementum sollicitudin ipsum quis interdum. Morbi odio tellus, dictum a posuere id, cursus quis lacus. Mauris lacus ante, commodo a dapibus quis, tincidunt vel dolor.</p>
                        <a className="button" href="/">Learn more</a>
                    </div>
                    <div className="programs_item_div">
                        <img src="/assets/img/feature_two.jpg" alt="feature two" />
                        <h1 className="div_heading light">Program Two</h1>
                        <p className="div_subheading light left">Suspendisse potenti. Phasellus elementum sollicitudin ipsum quis interdum. Morbi odio tellus, dictum a posuere id, cursus quis lacus. Mauris lacus ante, commodo a dapibus quis, tincidunt vel dolor.</p>
                        <a className="button" href="/">Learn more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Programs;