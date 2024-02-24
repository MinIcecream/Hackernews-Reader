import { useCallback, useEffect, useState } from 'react'    
import Markdown from 'react-markdown' 
import rehypeSanitize from 'rehype-sanitize';
import { timeAgo } from '../util/timeAgo';
import { CommentType, getComment } from '../api/hackernews';

export default function Comment(props: {commentId: number}) { 
    const [comment, setComment] = useState<CommentType>(null);
    const fetchComment = useCallback(async (commentId) => {
        const comment = await getComment(commentId);
        setComment(comment);
    }, []);

    useEffect(() => {
        setComment(null);
        fetchComment(props.commentId);
    }, [props.commentId, fetchComment]);
 
    if(!comment || comment.deleted){
        return null
    }  

    return comment && (
        <div className = "Comment">   
            <div className= "commentDetails">{comment.by} {timeAgo(comment.time)}</div>
            <Markdown rehypePlugins={[rehypeSanitize]}>{comment.text}</Markdown>
            <div style={{paddingLeft: 25}}>{comment.kids?.map(kidId => <Comment key={kidId} commentId={kidId} />)}
            </div>
        </div>  
    ) 
}