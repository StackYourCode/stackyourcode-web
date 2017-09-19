import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './pages/App';

import './css/index.css';

class Index extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <Router>
        <Switch>
			<Route path='/:all' component={App} />
          <Route component={App} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
