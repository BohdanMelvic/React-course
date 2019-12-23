import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             selectedPostId: null
        }
    }
    

    componentDidMount() {
        const posts = axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.then( response => {
            const posts = response.data.slice(0, 4);
            const updatedPost = posts.map( p => {
                return { ...p, author: 'Bohdan' }
            });
            this.setState({posts: updatedPost});
        });
    }

    postClickedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        const posts = this.state.posts.map( post => {
            return (
                <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postClickedHandler(post.id)}
                />
            )
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;