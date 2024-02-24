 import { Link } from 'react-router-dom'; 
import './App.css'; 
import { timeAgo } from '../util/timeAgo';
import { PostType } from '../api/hackernews';

interface PostProps{
    id: number;
    post: PostType;
}
 
export default function Post(props: PostProps) { 
    return( 
        <div className = "Post"> 
            <Link className = "commentsLink" to = {'/story/'+props.post.id} state = {props.post}>
                <h5 className = "postTitle"> {props.id}. {props.post.title} </h5>
            </Link> 
            <div className = "postDetails">{props.post.score} points by {props.post.by} {timeAgo(props.post.time)} | {props.post.descendants||0} comments</div>
        </div>  
    )
}