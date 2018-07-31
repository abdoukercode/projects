import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Col, Image, Button } from 'react-bootstrap'
import './home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to feelfree.io</h2>
                    <p>React and react bootstrap train</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}

export default Home;
