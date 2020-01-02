import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

export class Posts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             posts: [],
             selectedPostId: null,
             error: false
        };
    }

    componentDidMount() {
        const posts = axios.get('/posts');
        posts.then( response => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map( p => {
                return { ...p, author: 'Bohdan' }
            });
            this.setState({posts: updatedPost});
        })
        .catch(error => {
            this.setState({error: true})
        });
    }

    postClickedHandler = (id) => {
        //this.setState({selectedPostId: id})
        this.props.history.push({pathname: '/posts/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Some problem with server!</p>
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return (
                    //<Link to={'/' + post.id}  key={post.id}>
                        <Post
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postClickedHandler(post.id)}
                        />
                    //</Link>
                )
            });
        }
        
        return (
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={ FullPost }/>
            </div>
           
        )
    }
}

export default Posts
