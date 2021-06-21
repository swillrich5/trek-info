import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchCharacters from './pages/SearchCharacters';
import Episode from './pages/Episode';
import Character from './components/Character';
import './App.css';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/characters' component={SearchCharacters}/>          
          <Route path='/character/:uid' component={Character} />
          <Route path='/episode/:uid' component={Episode} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
