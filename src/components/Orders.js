import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Route, Link} from "react-router-dom";
import {changeCurrent} from '../actions/viewOrderActions';
//import {useDispatch} from 'react-redux';
import {signIn, signOut} from '../actions/isLoggedActions'



// const renderOrder = (order, index) => {
//     return(
//         <tr key={index}>
//             <td>{order.ID}</td>
//             <td>{order.Date}</td>
//             <td>{order.Status}</td>
//             <td><Link to='/Account/ViewOrder'><Button onClick = {() => changeCurrent(order)}>view details</Button></Link></td>
//         </tr>
//     )
// }



class Orders extends Component{



    renderOrder(order, index){
        return(
            <tr key={index}>
                <td>{order.ID}</td>
                <td>{order.Date}</td>
                <td>{order.Status}</td>
                <td>
                    {/* <Link to='/Account/ViewOrder'>
                        <Button onClick = {() => this.props.signIn()}>
                            view details 
                        </Button>
                    </Link> */}
                    <Link to={"/Account/ViewOrder/"+String(order.ID)}>Details</Link>
                </td>
            </tr>
        )
    }


    render(){
        return(
            <>
                <h1>Orders</h1>
                <React.Fragment>
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
                                {this.props.orders.map((order, index) => this.renderOrder(order, index))}
                            </tbody>
                    </Table>
                    {/* <Route path='/Account/Orders/:account' component={Account} /> */}
                </React.Fragment>
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

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      //changeCurrent: (currentOrder) => dispatch(changeCurrent(currentOrder))
      signIn: () => dispatch(signIn()),
      signOut: () => dispatch(signOut())
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Orders);