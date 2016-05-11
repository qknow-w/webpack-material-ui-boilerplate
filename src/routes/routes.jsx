import React from 'react'
import {Route, IndexRoute, Link} from 'react-router'
import App from "../containers/App"
import Betting from "../containers/Betting"
import History from "../containers/History"
import Home from "../containers/Home"


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="betting" component={Betting}/>
        <Route path="history" component={History}/>
    </Route>
)

export default routes
