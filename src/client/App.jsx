import React from "react"
import {Switch,Route} from "react-router-dom"
import {Router} from "react-router"
import {createBrowserHistory} from 'history'
import Home from './components/Home'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import './styles.scss'


export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <HelmetProvider context={{}}>
        <div>
          <Helmet>
              <meta charset="utf-8" />
              <title>Project Lance</title>
              <meta name="description" content="For Freelancers, By Freelancers, and Free" />
              <meta name="author" content="Xcidis" />
              <link rel="stylesheet" type="text/css" href="static/styles.css" />
          </Helmet>
          <Router history={this.props.history}>
            <Switch>
              <Route
                exact
                path="/home"
                component={Home}
                />
            </Switch>
          </Router>
        </div>
      </HelmetProvider>
    )
  }
}
