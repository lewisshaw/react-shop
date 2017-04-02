import React from 'react';

import Product from './product';
import ProductsData from './data/products-data.js';

var ProductPage = React.createClass({
  getInitialState: function(){
    return {
      product: null,
      error: '',
    }
  },
  componentDidMount: function(){
    ProductsData.getProduct(this.props.match.params.id, function(error, product) {
        if (error) {
          this.setError('An error occurred while loading this product - please retry');
          return;
        }
        this.setError('');
        this.setProduct(product);
    }.bind(this));
  },
  render: function(){
    var product = (
        <p>Loading...</p>
    );
    if (this.state.product) {
        product = (
            <Product product = {this.state.product} />
        );
    } else if (this.state.error) {
        product = (
            this.state.error
        )
    }
    return (
      <div>
        <h1>View Product</h1>
        {product}
      </div>
    )
  },
  setProduct: function(product) {
    var newState = this.state;
    newState.product = product;
    this.setState(newState);
  },
  setError: function(error) {
    var newState = this.state;
    newState.error = error;
    this.setState(newState);
  }
});

module.exports = ProductPage;
