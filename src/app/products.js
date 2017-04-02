import React from 'react';
import request from 'request';
import Product from './product';

import ProductsData from './data/products-data';

var Products = React.createClass({
    getInitialState: function() {
        return {
          products: [],
          error: '',
          loading: true
        };
    },
    componentDidMount: function() {
      this.setLoading(true)
      ProductsData.getProducts(function(error, products){
        this.setLoading(false);
        var newState = this.state;
        if (error) {
            newState.error = 'An error occurred - could not fetch products. Please retry';
            this.setState(newState);
            return;
        }
        newState.products = products;
        this.setState(newState);
      }.bind(this));
    },
    render: function() {
        var products = this.state.products;
        products = products.map(function(product, key) {
            return(
                <Product product={product} key={key} />
            );
        });
        var loading = '';
        if (this.state.loading) {
            loading = 'loading...';
        }
        return(
            <div>
                <h2>Our Products</h2>
                {this.state.error}
                {loading}
                {products}
            </div>
        );
    },
    setLoading: function(loading) {
        var newState = this.state;
        newState.loading = loading;
        this.setState(newState);
    }
});

module.exports = Products;
