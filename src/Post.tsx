import React from 'react' 

interface PostProps{
    id: number;
    post: {
        title: string,
        by: string,
        time: number;
        score: number;
        descendants: number;
    };
}
 
export default function Post(props: PostProps) {
    const currentTime = Math.floor(Date.now() / 1000);
    let diff = currentTime - props.post.time;

    let timePassed: string;
    if (diff>3600){
        timePassed = Math.floor(diff/3600).toString();
        if (timePassed == "1"){
            timePassed += " hour ago"
        }
        else{
            timePassed += " hours ago";
        }
    }
    else{ 
        timePassed = Math.floor(diff/60).toString() + " minutes ago";
    }

    return(
        <div className = "Post">
            <h5 className = "postTitle"> {props.id}. {props.post.title} </h5>
            <div className = "postDetails">{props.post.score} points by {props.post.by} {timePassed} | {props.post.descendants||0} comments</div>
        </div>
    )
}