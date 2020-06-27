import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class Landing extends Component {

    componentWillMount() {
        document.title = "Home"
    }

    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQEP7T5fgnMPwg/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=Wgu_86kpZWr5cL4c7bNbkPabYOh5JoEhzrSW9UDS82o"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div>
                            <h1 style={{fontSize: '100px', fontFamily: 'Parisienne', color: 'white'}}>
                                Bryant Gunaman
                            </h1>
                        </div>
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
                                <a href="https://www.facebook.com/public/Bryant-Gunaman" rel="noopener noreferrer" target="_blank">
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