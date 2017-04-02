import React from 'react';

export default class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.removeProduct = this.removeProduct.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    render() {
        return(
          <div className="panel panel-default">
            <div className="panel-body">
              {this.props.product.quantity} x {this.props.product.title}
              <div>
                <button type="button" className="btn btn-warning clearfix pull-left" onClick={this.increaseQuantity}>+</button>
                <button type="button" className="btn btn-warning clearfix pull-left" onClick={this.decreaseQuantity}>-</button>
              </div>
              <div className="pull-right"><button type="button" className="btn btn-default" onClick={this.removeProduct}>Remove</button></div>
              <div className="pull-right">&pound;{this.props.product.price}</div>
            </div>
          </div>
        );
    }
    removeProduct() {
        this.props.removeProduct(this.props.product);
    }
    increaseQuantity() {
        this.props.changeQuantity(this.props.product, this.props.product.quantity + 1);
    }
    decreaseQuantity() {
        if(this.props.product.quantity - 1 === 0) {
          this.removeProduct();
          return;
        }
        this.props.changeQuantity(this.props.product, this.props.product.quantity - 1);
    }
};
