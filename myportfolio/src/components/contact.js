import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

    componentWillMount() {
        document.title = "Contact"
    }

    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Bryant Gunaman</h2>
                        <img 
                            src="https://avatars2.githubusercontent.com/u/43711262?s=460&u=c2c797fd99c739f28f7f0f5ffc1229be5f21ab80&v=4"
                            alt="avatar"
                            style={{height: '350px', borderRadius: '50%'}}
                            />
                        {/* <p style={{ width: '75%', margin: 'auto', padingTop: '1em'}}>
                            DESCRIPTION ABOUT ME
                        </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List >
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (628) 999-3783
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        bryantgunaman@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        linkedin.com/in/bryantgunaman
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;