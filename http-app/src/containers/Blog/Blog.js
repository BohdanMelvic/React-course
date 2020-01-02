import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import NewPost from '../Blog/NewPost/NewPost';
//import FullPost from '../Blog/FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent'
const AsyncNewPost = asyncComponent( () => {
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <header>
                   <nav>
                       <ul>
                           <li><NavLink to="/posts/" exact activeStyle={{
                               color: '#fa923f',
                               textDecoration: 'underline'
                           }}>Home</NavLink></li>
                           <li><NavLink to={{
                               pathname: "/newPost",
                               hash: '#submit',
                               search: '?quick-submit=true'
                           }}>New post</NavLink></li>
                       </ul>
                   </nav>
                </header>
                {/* <Route path='/' exact render={ () => <Posts />}/> */}
                <Switch>
                    <Route path='/newPost' exact component={ AsyncNewPost }/>
                    <Route path='/posts'  component={ Posts }/>
                    <Redirect from="/" to="/posts" />
                    <Route render={ () => <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;