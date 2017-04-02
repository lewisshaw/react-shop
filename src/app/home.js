import React from 'react';

import Products from './products';

var Home = React.createClass({
    render: function() {
        return(
            <div>
              <div className="jumbotron">
                  <h1>Welcome to the store</h1>
                  <p className="lead">Here you can buy what you want...</p>
              </div>
              <Products />
            </div>
        );
    }
});

module.exports = Home;
