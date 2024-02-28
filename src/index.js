import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ServicesPricing from './views/services-pricing'
import Error from './views/error'
import Contact from './views/contact'
import MainPage from './views/main-page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ServicesPricing} exact path="/services-pricing" />
        <Route component={Error} path="**" />
        <Route component={Contact} exact path="/contact" />
        <Route component={MainPage} exact path="/" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
