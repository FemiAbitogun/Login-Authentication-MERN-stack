import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/authorizationPages/Login';
import Register from './components/authorizationPages/Register';
import Home from './components/Home';
import ContextGlobal from './context/ContextGlobal';
import Navbar from './components/authorizationPages/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextGlobal>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </ContextGlobal>
      </BrowserRouter>
    </div>
  );
}

export default App;




