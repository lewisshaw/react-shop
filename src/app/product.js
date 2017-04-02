import React from 'react';

import {Link} from 'react-router-dom';

var Product = React.createClass({
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading"><h3><Link to={"/product/" + this.props.product.id}>{this.props.product.title}</Link></h3></div>
                <div className="panel-body"><h4>Description</h4><p>{this.props.product.description}</p><p>&pound;{this.props.product.price}</p></div>
            </div>
        );
    }
});

module.exports = Product;
