import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import "./App.css"

import Header from './components/Header/Header'
import Login from './components/Authentication/Login'

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <Login />
}

function Users() {
  return <h2>Users</h2>
}

export default function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <Router>
      <div>

        <Header /> 

        <Switch>
          <Route path="/about">
            <div>
              <About />
            </div>
          </Route>
          <Route path="/users">
            <div>
              <Users />
              <p>{!data ? "Loading..." : data}</p>
            </div>
          </Route>
          <Route path="/">
            <div>
              <Home />
              <p>{!data ? "Loading..." : data}</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}