import React from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import './App.css';

interface PostProps{
    id: number;
    post: {
        title: string,
        by: string,
        time: number;
        score: number;
        descendants: number;
        id: number;
    };
}
 
export default function Post(props: PostProps) { 
    return( 
        <div className = "Post"> 
            <Link className = "commentsLink" to = {'/story/'+props.post.id} state = {props.post}>
                <h5 className = "postTitle"> {props.id}. {props.post.title} </h5>
            </Link> 
            <div className = "postDetails">{props.post.score} points by {props.post.by} {props.post.time} | {props.post.descendants||0} comments</div>
        </div>  
    )
}