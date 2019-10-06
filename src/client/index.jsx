import React from "react"
import ReactDOM from "react-dom"
import {Switch,Route} from "react-router-dom"
import {createBrowserHistory} from 'history'
import {Router} from "react-router"
import Albums from "./components/Album"
import './styles.scss';

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact 
            path="/" 
            component={Albums} 
          />
        </Switch>
      </Router>
    )
  }
}

if (!document.getElementById("root").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("root"))
} else {
  ReactDOM.hydrate(<App />, document.getElementById("root"))
}