var React = require('react');

var NotFound = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h2>Sorry, this page doesn't seem to exist</h2>
            </div>
        );
    }
});

module.exports = NotFound;
