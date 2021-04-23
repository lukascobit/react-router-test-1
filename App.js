import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './components/About.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import PageNotFound from './components/PageNotFound.js'

function App() {
  return (
    <>
    <Router>
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      </div>
      
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
