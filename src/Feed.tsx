import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';

//Component that handles all stopwatch functionality
export default function Feed() {
    const [ids, setIds] = useState([]);
    const getTopStories = async () => {
        try{
            const topIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
            const data = await topIds.json();
            const topTenIds = data.slice(0,10); 
            const topTenStories = await Promise.all(topTenIds.map(async (element: string) => { 
                const data = await IdToStory(element);
                console.log(data);
                return data; 
            }));
            setIds(topTenStories);  
        }
        catch{
            throw("Issue accessing API!");
        }
    }
    const IdToStory = async(id: string) =>{
        const story = await fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty");
        const data = await story.json();    
        return data;
    }

    useEffect(()=>{
        getTopStories();
    }, []); 

    return(
        <div id ="Feed">
            {ids.map((post, index) =>(  
                <div><Post key = {index+1} id={index+1} post={post} /> </div>
            ))}
        </div>
    )
}