import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return (
            <div id="footer_div">
                <div id="footer_column_div">
                    <div className="footer_column">
                        <h1 className="div_heading left footer">About Us</h1>
                        <p className="div_subheading left footer_sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>

                    <div className="footer_column">
                        <h1 className="div_heading left footer">Download</h1>
                        <ul>
                            {this.props.footer.download.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h1 className="div_heading left footer">Company</h1>
                        <ul>
                        {this.props.footer.company.map((item, i) => {
                                return(
                                    <li key={i}><a href={item.href} className="div_subheading footer_sub">{item.paragraph}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <p className="div_subheading red">© 2018 Avonlea Haymart</p>
            </div>
        )
    }
}

export default Footer;