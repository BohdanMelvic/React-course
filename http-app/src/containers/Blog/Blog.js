import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import instance from '../../axios'

class Blog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             selectedPostId: null,
             error: false
        }
    }
    

    componentDidMount() {
        const posts = instance.get('/posts');
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
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Some problem with server!</p>
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return (
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postClickedHandler(post.id)}
                    />
                )
            });
        }
        
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