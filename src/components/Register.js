import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


export function Register(){
    return(
        <div id='poleLogowania'>
            <h1>Register on our site</h1>
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

                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                <Button id="lewy" variant="primary" type="submit">
                Register
                </Button>
                <Link to='/Login'><Button id="prawy" variant="primary" type="button">
                To Login
                </Button></Link>
             </Form>
        </div>
    );
}
