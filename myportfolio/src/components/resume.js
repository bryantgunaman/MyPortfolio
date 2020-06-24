
import React, { Component } from 'react';
import { Grid, Cell,} from 'react-mdl';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render () {
        return (
            <div>
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAlign: 'center', paddingRight:"10em"}}>
                                <img
                                    src="https://66.media.tumblr.com/c94db31e99da5a8bba0a4087d6f137f6/tumblr_plck75zRtX1tnbbg0_640.jpg"
                                    alt="avatar"
                                    style={{height: '200px', borderRadius: '50%'}}
                                    />
                            </div>
                            <div style={{paddingTop: '2em'}}>
                                <Grid>
                                    <Cell col={4}>
                                        <Button variant="contained" color="primary" style={{height:'75px', width:'150px'}}>
                                            <Link 
                                                target="_blank"
                                                style={{textDecoration: 'none', color: 'white'}} 
                                                to="/cs-resume">Computer Science Resume   
                                            </Link>
                                        </Button>
                                    </Cell>
                                    <Cell col={4}>
                                        <Button variant="contained" color="secondary" style={{height:'75px', width:'150px'}}>
                                        <Link 
                                            target="_blank"
                                            style={{textDecoration: 'none', color: 'white'}} 
                                            to="/business-resume">Business Resume 
                                        </Link>
                                        </Button>
                                    </Cell>
                                </Grid>
                            </div>
                            
                            <h2 > Bryant Gunaman</h2>
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
                        <Cell className="resume-right-col" col={8}>
                            <h2>Education</h2>
                            <Education
                                startYear={2016}
                                endYear={2020}
                                schoolName={"University of California, Irvine"}
                                schoolDescription={"BLABLABLA"}
                            />
                            <Education
                                startYear={2016}
                                endYear={2020}
                                schoolName={"University of California, Irvine"}
                                schoolDescription={"BLABLABLA"}
                            />
                            <hr style={{borderTop: '3px solid #e22947'}}/>

                            <h2>Experience</h2>
                            <Experience 
                                startYear={2018}
                                endYear={2019}
                                jobName="First Job"
                                jobDescription="adsfaef"
                            />
                            <Experience 
                                startYear={2018}
                                endYear={2019}
                                jobName="Second Job"
                                jobDescription="adsfaef"
                            />

                            <hr style={{borderTop: '3px solid #e22947'}}/>
                            <h2>Skills</h2>
                            <Skills 
                                skill='python'
                                progress={100}
                            />
                            <Skills 
                                skill='python'
                                progress={100}
                            />
                            <Skills 
                                skill='python'
                                progress={100}
                            />
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Resume;