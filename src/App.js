import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchCharacters from './pages/SearchCharacters';
import './App.css';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/characters' component={SearchCharacters}/>          

        </Switch>

      </div>
    </Router>

  );
}

export default App;
