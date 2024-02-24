export function timeAgo(time: number){
    const currentTime = Math.floor(Date.now() / 1000);
    let diff = currentTime - time;

    let timePassed: string;

    if (diff > 3600 * 24){
        timePassed = Math.floor(diff/(3600 * 24)).toString();
        if (timePassed === "1"){
            timePassed += " day ago"
        }
        else{
            timePassed += " days ago";
        }
    }

    else if (diff>3600){
        timePassed = Math.floor(diff/3600).toString();
        if (timePassed === "1"){
            timePassed += " hour ago"
        }
        else{
            timePassed += " hours ago";
        }
    }
    else{ 
        timePassed = Math.floor(diff/60).toString() + " minutes ago";
    } 
    return timePassed;
}