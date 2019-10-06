import React from "react"
import ReactDOM from "react-dom"
import {Switch,Route} from "react-router-dom"
import {createBrowserHistory} from 'history'
import {Router} from "react-router"
import Home from './components/Home'
import './styles.scss'
const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact 
            path="/" 
            component={Home} 
          />
        </Switch>
      </Router>
    )
  }
}

if (!document.getElementById("home").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("home"))
} else {
  ReactDOM.hydrate(<App />, document.getElementById("home"))
}