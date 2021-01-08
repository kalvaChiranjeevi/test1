import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './component/Home';
import Admin from './component/Admin';
import User from './component/User';
import MouseTracker from './component/test1';

function App() {
  return (
    <div className="App">
      
     {/* <Router>
      
       <Route path="/" exact component={Home}/>
       <Route path="/admin" exact component={Admin}/>
       <Route path="/user" exact component={User}/>

      
     </Router> */}

     <MouseTracker/>
    </div>
  );
}

export default App;
