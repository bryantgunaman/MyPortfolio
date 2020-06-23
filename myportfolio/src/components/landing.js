import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://66.media.tumblr.com/c94db31e99da5a8bba0a4087d6f137f6/tumblr_plck75zRtX1tnbbg0_640.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Developer</h1>
                            <hr/>
                            <p> C++ | C | Python | Java | Swift | Javascript | React | SQL | NoSQL</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/bryantgunaman/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/bryantgunaman" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/bryant.gunaman" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                        
                    </Cell>
                </Grid>     
            </div>
        )
    }
}

export default Landing;