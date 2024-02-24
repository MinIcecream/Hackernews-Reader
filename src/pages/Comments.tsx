import 'bootstrap/dist/css/bootstrap.css' 
import { useParams } from 'react-router-dom'; 
import { useState, useEffect, useCallback } from 'react';
import Comment from './Comment';
import { timeAgo } from '../util/timeAgo'
import { PostType, getStory } from '../api/hackernews';

//Main App. 
export default function Comments() {  
    const { storyId } = useParams();   
    const [story, setStory] = useState<PostType>(null);
    const getStoryDetails = useCallback(async (storyId: string) => { 
        const storyData = await getStory(storyId);
        setStory(storyData); 
    } , []);
    const topTenComments = story?.kids?.slice(0,10);

    useEffect(()=>{
        getStoryDetails(storyId);
    }, [getStoryDetails, storyId]); 

    return(
        <> 
            <div id="page-container">
                <h3 id = "heading">Hacker News</h3>
                <div id = "Feed">
                    {story && <div className = "Post">  
                        <h4 className = "scaledText postTitle"> {story.title} </h4>
                        <div className = "scaledText postDetails">{story.score} points by {story.by} {timeAgo(story.time)} | {story.descendants||0} comments</div>
                    </div>}
                    {topTenComments?.map((id) =>(  
                        <Comment key = {id} commentId={id} />
                    ))}
                </div> 
            </div>  
        </> 
    )
}