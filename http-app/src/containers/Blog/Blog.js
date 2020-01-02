import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <header>
                   <nav>
                       <ul>
                           <li><NavLink to="/" exact activeStyle={{
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
                    <Route path='/' exact component={ Posts }/>
                    <Route path='/newPost' exact component={ NewPost }/>
                    <Route path='/:id' exact component={ FullPost }/>
                </Switch>
            </div>
        );
    }
}

export default Blog;