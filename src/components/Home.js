import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../BS1.css';


class Home extends Component{
    render(){
        return(
            <>
            <h1>Homepage</h1>
            <div id='poleLogowania'>
                
                <Link to='/Login'><Button id="lewy" variant="primary" type="submit">
                To Log in
                </Button></Link>
                <Link to='/Register'><Button id="prawy" variant="primary" type="button">
                To register
                </Button></Link>
                
            </div>
            </>
        )
    }
}

export default Home;