import 'bootstrap/dist/css/bootstrap.css'
import Feed from './Feed';  

//Main App. 
export default function App() {  
    return( 
        <>
            <div id="page-container">
                <h3 id = "heading">Hacker News</h3> 
                <Feed/> 
            </div>    
        </>
    )   
}