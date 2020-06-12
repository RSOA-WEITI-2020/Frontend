import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


const renderOrder = (order, index) => {
    return(
        <tr key={index}>
            <td>{order.ID}</td>
            <td>{order.Date}</td>
            <td>{order.Status}</td>
            <td></td>
        </tr>
    )
}

class Orders extends Component{

    render(){
        return(
            <>
                <h1>Orders</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map(renderOrder)}
                    </tbody>
                </Table>
                <Link to='/Account/NewOrder'>
                    <Button id="prawy" variant="primary" type="button">
                        Create New Order
                    </Button>
                </Link>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        orders: state.orders
    }
}


 export default connect(mapStateToProps)(Orders);