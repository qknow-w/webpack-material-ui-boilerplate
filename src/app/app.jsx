import '../css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
//import Main from './Main'; // Our custom react component
import routes from '../routes/routes'
import {createStore} from "redux"
import Counter from "../reduers/Counter"
import {Provider} from "react-redux"
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
let store = createStore(Counter)

ReactDOM.render(
  <Provider store ={store}>
  <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('app'));
