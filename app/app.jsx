var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app.scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<IndexRoute component={Weather} />
		</Route>
  </Router>,
  document.getElementById('app')
);
