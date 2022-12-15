import './App.css';
import {
  BrowserRouter as Router , 
  Switch, 
  Route
} from 'react-router-dom';  

import Navbar from './components/Navbar';
import Users from './pages/Users'; 
import Movies from './pages/Movies';    //추가한다


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <Switch>
        <Route path="/" exact>
              <h1>Home 입니다</h1>
        </Route>
        <Route path="/movies">
            <Movies />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
      </Switch>  

      </div>
    </Router>
  );
}

export default App;