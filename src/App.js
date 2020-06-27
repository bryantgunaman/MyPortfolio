import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

  // state = {
  //   data: null
  // };
  // add the following line to package.json
  // "proxy": "http://localhost:5000/"
  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };


  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>
              } scroll>
              <Navigation>
                  {/* <Link to="/aboutme">About Me</Link>*/}
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Header>
          <Drawer title={
              <Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
              <Navigation>
                {/* <Link to="/aboutme">About Me</Link>*/}
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>
    );
  } 
}

export default App;
