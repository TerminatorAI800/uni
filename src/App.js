import Home from './components/home/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar/Navbar';
import Verification from './components/Verification/Verification.js'
import DocCollection from './components/Docs/docs';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/docs">
              <Navigation />
              <DocCollection />
            </Route>
            <Route path="/upload">
              <Navigation />
              <Verification />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
