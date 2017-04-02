import React from 'react';

import CartProduct from './cart-product';

var Cart = React.createClass({
    getInitialState: function() {
        return {
            "cart": {
                "products": [
                  {
                    "id": 1,
                    "title": "Computer",
                    "price": 299.00,
                    "quantity": 1
                  },
                  {
                    "id": 2,
                    "title": "Laptop",
                    "price": 399.00,
                    "quantity": 2
                  }
                ],
                "total": 11.99
            }
        };
    },
    componentDidMount: function() {
    },
    render: function() {
        var products = this.state.cart.products;
        products = products.map(function(product, key) {
            return(
              <CartProduct product={product} key={key} />
            );
        });
        return(
            <div>
              <div className="jumbotron">
              <h1>Your Cart</h1>
              </div>
              {products}
              <div className="pull-right">Your cart total: &pound;{this.state.cart.total}
                <button type="button" className="btn btn-success"> Continue to Checkout</button>
              </div>
            </div>
        );
    }
});

module.exports = Cart;
