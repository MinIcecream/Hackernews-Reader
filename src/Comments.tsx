import 'bootstrap/dist/css/bootstrap.css' 
import { useParams } from 'react-router-dom';
import { StringifyTime } from './Feed';
import React, { useState, useEffect } from 'react';
 
//Main App. 
export default function Comments(props : object) {  
    const { storyId } = useParams();   
    const [story, setStory] = useState({
        time: 0,
        title: "",
        by: "",
        descendants: 0,
        score: 0,
    });
    const getStoryDetails = async() => { 
        const storyRaw = await fetch("https://hacker-news.firebaseio.com/v0/item/" + storyId + ".json?print=pretty"); 
        const storyData = await storyRaw.json(); 
        storyData.time = StringifyTime(storyData.time);
        setStory(storyData); 
    } 
  
    useEffect(()=>{
        getStoryDetails();
    }, []); 

    
    return(
        <> 
            <div id="page-container">
                <h3 id = "heading">Hacker News</h3>
                <div id = "Feed">
                    <div className = "Post">  
                        <h5 className = "postTitle"> {story.title} </h5>
                        <div className = "postDetails">{story.score} points by {story.by} {story.time} | {story.descendants||0} comments</div>
                    </div>   
                </div> 
            </div>  
        </> 
    )
}