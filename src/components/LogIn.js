import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../BS1.css';
import {useDispatch, connect} from 'react-redux';
import {signIn} from '../actions/isLoggedActions'




class LogIn extends Component{
    //const dispatch = useDispatch();
    handleSubmit(){
        this.props.signIn()
    }

    render(){
        return(
            <div id='poleLogowania'>
                <h1>Log in to your account</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me (jeszcze nie dziala)" />
                    </Form.Group>
                    <Link to='/Account'>
                        <Button id="lewy" variant="primary" type="submit" onClick = {()=>this.handleSubmit()}>
                            Log in
                        </Button>
                    </Link>
                    <Link to='/Register'>
                        <Button id="prawy" variant="primary" type="button">
                            To register
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      signIn: () => dispatch(signIn())

    }
  }

 export default connect(null,mapDispatchToProps)(LogIn);