import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from './landing';
import AboutMe from './aboutMe'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
import ComputerScienceResume from './computerScienceResume'
import BusinessResume from './businessResume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/MyPortfolio" render={() => (<Redirect to="/" />)} />  
        <Route path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/cs-resume" component={ComputerScienceResume} />
        <Route exact path="/business-resume" component={BusinessResume} />
    </Switch>
)

export default Main;