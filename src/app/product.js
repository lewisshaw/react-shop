import React from 'react';

import {Link} from 'react-router-dom';

var Product = React.createClass({
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading"><h3><Link to={"/product/" + this.props.product.productId}>{this.props.product.title}</Link></h3></div>
                <div className="panel-body"><h4>Description</h4><p>{this.props.product.description}</p><p>&pound;{this.props.product.price}</p>
                    <button type="button" className="btn btn-success" onClick={this.addToBasket}>Add to basket</button>
                </div>
            </div>
        );
    },
    addToBasket: function() {
        this.props.addToBasket(this.props.product.productId);
    }
});

module.exports = Product;
