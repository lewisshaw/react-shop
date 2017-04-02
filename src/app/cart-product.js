import React from 'react';

export default class CartProduct extends React.Component {
    render() {
        return(
          <div className="panel panel-default">
            <div className="panel-body">
              {this.props.product.quantity} x {this.props.product.title}
              <div className="pull-right"><button type="button" className="btn btn-default">Remove</button></div>
              <div className="pull-right">&pound;{this.props.product.price}</div>
            </div>
          </div>
        );
    }
};
