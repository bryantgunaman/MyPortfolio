import React, { Component } from 'react';
import { Grid, Cell,} from 'react-mdl';

class Resume extends Component {
    render () {
        return (
            <div>
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAligh: 'center'}}>
                                <img
                                    src="https://66.media.tumblr.com/c94db31e99da5a8bba0a4087d6f137f6/tumblr_plck75zRtX1tnbbg0_640.jpg"
                                    alt="avatar"
                                    style={{height: '200px'}}
                                />
                            </div>
                            <h2 style={{paddingTop: '2em'}}> Bryant Gunaman</h2>
                            <h4 style={{color: 'grey'}}>Full Stack Software Developer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '65%'}}/>
                            <p>
                                BLABLABLABLABLA
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '65%'}}/>
                            <h5>Phone</h5>
                            <p>(628) 999-3783</p>
                            <h5>Email</h5>
                            <p>bryantgunaman@gmail.com</p>
                            <h5>LinkedIn</h5>
                            <p>/bryantgunaman</p>
                            <h5>Github</h5>
                            <p>/bryantgunaman</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '65%'}}/>
                        </Cell>
                        <Cell className="resume-right-col" col={8}>Right Side</Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Resume;