import React from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/UserHome'
import UserBlogs from './components/UserBlogs';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
            <Switch>
                <Route path="/" component={Menu} exact />
                <Route path="/home" component={UserHome} exact />
                <Route path="/blogs" component={UserBlogs} exact />
                <Route path="/about" component={About} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
            </Switch>
    </div>
  );
}

export default App;