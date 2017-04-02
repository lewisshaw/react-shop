import React from 'react';

var Product = React.createClass({
    render: function() {
        return(
            <div className="row">
            <div className="panel panel-default">
                <div className="panel-heading"><h3>{this.props.product.title}</h3></div>
                <div className="panel-body"><h4>Description</h4><p>{this.props.product.description}</p><p>&pound;{this.props.product.price}</p></div>
            </div>
            </div>
        );
    }
});

module.exports = Product;
