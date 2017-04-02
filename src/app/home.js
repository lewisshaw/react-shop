import React from 'react';

var Home = React.createClass({
    render: function() {
        return(
            <div className="jumbotron">
                <h1>Welcome to the store</h1>
                <p className="lead">Here you can buy what you want...</p>
            </div>
        );
    }
});

module.exports = Home;
