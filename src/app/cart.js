import React from 'react';
import {Link} from 'react-router-dom';

import CartProduct from './cart-product';
import CartData from './data/cart-data';

var Cart = React.createClass({
    getInitialState: function() {
        return {
            "cart": {
                "products": []
            },
            "loading": true
        };
    },
    componentDidMount: function() {
        CartData.getCart(function (error, cart) {
            if (error) {
                console.log(error);
                return;
            }
            var newState = this.state;
            newState.cart = cart;
            this.setState(newState);
        }.bind(this));
    },
    render: function() {
        var products = this.state.cart.products;
        products = products.map(function(product, key) {
            return(
              <CartProduct product={product} key={key} changeQuantity={this.changeQuantity} removeProduct={this.removeProduct} />
            );
        }.bind(this));
        return(
            <div>
              <div className="jumbotron">
              <h1>Your Cart</h1>
              </div>
              {products}
              <div className="pull-right">Your cart total: &pound;{this.state.cart.total}
                <Link to="/checkout"><button type="button" className="btn btn-success"> Continue to Checkout</button></Link>
              </div>
            </div>
        );
    },
    removeProduct: function(productToRemove) {
        var newState = this.state;
        CartData.removeProduct(productToRemove.productId, function(error) {
            if (error) {
                return;
            }
            newState.cart.products = newState.cart.products.filter(function(product) {
                return product !== productToRemove;
            });
            this.setState(newState);
        }.bind(this))
    },
    changeQuantity: function(productToUpdate, quantity) {
        var newState = this.state;
        newState.cart.products.map(function(product, key) {
            if (product === productToUpdate) {
                product.quantity = quantity;
            }
            return product;
        });
        this.setState(newState);
    }
});

module.exports = Cart;
