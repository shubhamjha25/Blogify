import React from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/UserHome'
import UserBlogs from './components/UserBlogs';
import BlogView from './components/BlogView';
import AuthError from './components/AuthError';
import CreateBlog from './components/CreateBlog';
import {Route, Switch} from 'react-router-dom';
import EditBlog from './components/EditBlog';

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
                <Route path="/authError" component={AuthError} exact />
                <Route path="/blogs/:id" component={BlogView} exact />
                <Route path="/create" component={CreateBlog} exact />
                <Route path="/edit/:id" component={EditBlog} />
            </Switch>
    </div>
  );
}

export default App;