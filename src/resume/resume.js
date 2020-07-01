import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';

class Resume extends Component {

    componentWillMount() {
        document.title = "Resume"
    }

    // Profile Picture component
    profilePicture = () => {
        return (
        <img
        src = {"https://media-exp1.licdn.com/dms/image/C5603AQEP7T5fgnMPwg/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=Wgu_86kpZWr5cL4c7bNbkPabYOh5JoEhzrSW9UDS82o"}
        alt="avatar"
        style={{height: '200px', borderRadius: '50%', marginLeft: '50px', marginBottom: '2em'}}
        /> )
    }

    // Handles opening a URL in a new tab
    handleOpenUrlNewTab = (url) => {
        // open at current tab for now because github.io doesn't support opening on new tab
        // var win = window.open(url, '_blank'); 
        var win = window.open(url, "_self");
        win.focus();
    }

    // Computer Science Resume Button Component
    csButton = () => {
        return (<Button 
                variant="contained" color="primary" 
                style={{height:'75px', width:'150px', marginRight:'5px'}}
                onClick={() => this.handleOpenUrlNewTab("/cs-resume")}>
                Computer Science Resume
                </Button> )
    }

    // Business Button Component 
    businessButton = () => {
        return (<Button 
                variant="contained" color="secondary" 
                style={{height:'75px', width:'150px'}}
                onClick={() => this.handleOpenUrlNewTab("/business-resume")}>
                Business Resume
                </Button>)
    }

    // Component consiting of the CS and Business Resume buttons
    resumeButtons = () => {
        return (<div>
                <this.csButton/><this.businessButton/>
                </div>
        )
    }

    // Name and Role Component
    nameLabel = () => {
        return (<div>
                <h2>Bryant Gunaman</h2>
                <h4 style={{color: 'grey'}}>Full Stack Software Developer</h4>
                </div>)
    }

    // A purple line to separate components
    purpleLine = () => {
        return (<hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>)
    }

    // Paragraph component describing myself
    personalDescription = () => {
        return (<p>
                An optimistic personality with an enduring work ethic. 
                Always seeking to make significant impacts and contributions. 
                A listening and understanding leader. 
                </p>)
    }

    // Component consiting of my phone number
    phoneLabel = () => {
        return (<div>
                <h5>Phone</h5>
                <p>(628) 999-3783</p>
                </div>)
    }

    // Component consiting of my email
    emailLabel = () => {
        return (<div>
                <h5>Email</h5>
                <p>bryantgunaman@gmail.com</p>
                </div>)
    }

    // Component consiting of my github profile
    githubLabel = () => {
        return (<div>
                <h5>Github</h5>
                <p>github.com/bryantgunaman</p>
                </div>)
    }

    // Component consiting of my linked in profile
    linkedInLabel = () => {
        return (<div>
                <h5>LinkedIn</h5>
                <p>linkedin.com/in/bryantgunaman</p>
                </div>)
    }

    // My personal detail components combined
    personalDetails = () => {
        return (<div>
                <this.nameLabel/> 
                <this.purpleLine/>
                <this.personalDescription/>
                <this.purpleLine/>
                <this.phoneLabel/>
                <this.emailLabel/>
                <this.githubLabel/>
                <this.linkedInLabel/>
                <this.purpleLine/>
                </div>)
    }

    // A combination of all left side components
    leftSideComponents = () => {
        return (
            <div>
            <this.profilePicture/>
            <this.resumeButtons/>
            <this.personalDetails/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Grid>
                    {/* Left side */}
                    <Cell col={4}>
                        <this.profilePicture/>
                        <div>
                        <Button 
                        variant="contained" color="primary" 
                        style={{height:'75px', width:'150px', marginRight:'5px'}}>
                        <Link 
                            style={{textDecoration: 'none', color: 'white'}} 
                            to="/cs-resume">Computer Science Resume   
                        </Link>
                        </Button><Button 
                        variant="contained" color="secondary" 
                        style={{height:'75px', width:'150px'}}>
                        <Link 
                            style={{textDecoration: 'none', color: 'white'}} 
                            to="/business-resume">Business Resume 
                        </Link>
                        </Button>
                        </div>
                        <this.nameLabel/> 
                        <this.purpleLine/>
                        <this.personalDescription/>
                        <this.purpleLine/>
                        <this.phoneLabel/>
                        <this.emailLabel/>
                        <this.githubLabel/>
                        <this.linkedInLabel/>
                        <this.purpleLine/>
                    </Cell>
                    {/* Right side */}
                    <Cell className="resume-right-col" col={8}>
                        <h2> UNDER CONSTRUCTION. DOWNLOAD MY RESUMES ON THE LEFT </h2>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName={"Computer Science"}
                            schoolDescription={"University of California, Irvine"}
                        />
                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName={"Business Information Management"}
                            schoolDescription={"University of California, Irvine"}
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
        )
    }
}

export default Resume;