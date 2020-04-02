import React, { Component } from 'react';
import './Showcase.css'

class Showcase extends Component {
    render() {
        return (
            <div id="showcase_div">
                <h1 className="div_heading">Features</h1>
                <div id="showcase_list_div">

                    {this.props.showcase.map((item, i) => {
                        return (
                            <div key={i} className="showcase_item_div">
                                <div className="showcase_image_div">
                                    <img src={item.image} alt={item.heading} />
                                </div>
                                <div className="showcase_text_div">
                                    <h1>{item.heading}</h1>
                                    <p className="div_subheading left">{item.paragraph}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Showcase;