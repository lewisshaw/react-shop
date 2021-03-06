var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

require ('./css/layout.css');

import Navigation from './navigation';
import Home from './home';
import NotFound from './not-found';
import ProductPage from './product-page';
import Cart from './cart';

var App = React.createClass({
    render: function() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <div className="container container-fluid" role="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/product/:id" component={ProductPage} />
                            <Route path="/cart" component={Cart} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
});


ReactDOM.render(<App />, document.getElementById('shop-wrapper'));
