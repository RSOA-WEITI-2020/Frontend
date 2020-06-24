import React, { Component } from 'react';
import {connect} from 'react-redux';

class ViewOrder extends Component{

  giveDescription(orders, searchedId){
    for (var i = 0; i < orders.length; i++)
    {
      if (orders[i].ID === searchedId) return orders[i].Description;
    }
    return "Nothing";
  }

  render(){
    return(
      <>
        <h3>ID: {this.props.match.params.order}</h3>
        <h3>CODE:</h3>
        <br/>
        <p>{this.giveDescription(this.props.orders, this.props.match.params.order)}</p>
      </>
    )
  }
}


const mapStateToProps = (state) => {
    return{
        orders: state.orders
    }
}

export default connect(mapStateToProps,null)(ViewOrder);