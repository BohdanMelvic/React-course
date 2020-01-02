import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
//import { Link } from 'react-router-dom';

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
        this.props.history.push({pathname: '/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Some problem with server!</p>
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return (
                    //<Link to={'/' + post.id}  key={post.id}>
                        <Post 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postClickedHandler(post.id)}
                        />
                    //</Link>
                )
            });
        }
        
        return (
            <section className="Posts">
                    {posts}
            </section>
        )
    }
}

export default Posts
