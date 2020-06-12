import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';
import {Route, Link} from "react-router-dom";
import NaviBar from './NaviBar';
import '../BS1.css';
import {connect} from 'react-redux';
import Orders from './Orders';
import NewOrder from './New';


function UserInfoElement(props){
    return(
        <>
            <td>{props.NazwaPola}</td>
            <td>{props.WartoscPola}</td>
            <td><Button variant="primary" type="button" onClick={()=>props.ZmienWartosc()}>
                Change
            </Button></td>
        </>
    );
}

function UserInfo(){
    return(
        <>
            <h1>UserInfo</h1>
            <Table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr><UserInfoElement NazwaPola='Email' WartoscPola='abakus@gmail.com'/></tr>
                    <tr><UserInfoElement NazwaPola='Password' WartoscPola='abc123'/></tr>
                </tbody>
            </Table>
        </>
    );
}



function FailLogin(){
    return(
        <>
        <div id='poleLogowania'>
            <h2>Sorry, but it's not proper combination</h2>
            <Link to='/Login'><Button id="srodkowy" variant="primary" type="submit">
            Return
            </Button></Link>
        </div>
        </>
    );
}

class Account extends Component{

    render(){
        return(
            <>
            { this.props.isLogged ? (
                <>
                <NaviBar/>
                <Route path='/Account/NewOrder'>
                    <NewOrder/>
                </Route>
                <Route path='/Account/UserInfo'>
                    <UserInfo/>
                </Route>
                <Route path='/Account/Orders'>
                    <Orders/>
                </Route>
                </>
            ) : (
                <>
                <FailLogin/>
                </>
            )
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLogged: state.isLogged
    }
}


 export default connect(mapStateToProps)(Account);