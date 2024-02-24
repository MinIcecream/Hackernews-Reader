import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css'
import Feed from './Feed'; 

//Main App. 
export default function Home() {  
    return(
        <> 
            <div id="page-container">
                <h3 id = "heading">Hacker News</h3>
                <Feed/> 
            </div>  
        </> 
    )
}