import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Post from './Post'; 
import { getTopPosts } from '../api/hackernews';

//Component that handles all stopwatch functionality
export default function Feed() {
    const [ids, setIds] = useState([]);
    const getTopStories = useCallback(async () => {
        const topTenStories = await getTopPosts();
        setIds(topTenStories);
    }, []); 

    useEffect(()=>{
        getTopStories();
    }, [getTopStories]); 

    return(
        <div id ="Feed">
            {ids.map((post, index) =>(  
                <div key = {index} ><Post id={index+1} post={post} /> </div>
            ))}
        </div>
    )
}
