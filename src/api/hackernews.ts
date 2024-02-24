export type PostType = {
    title: string,
    by: string,
    time: number;
    score: number;
    descendants: number;
    id: number;
    kids: number [],
}

export type CommentType = { 
    text: string,
    by: string,
    time: number; 
    kids?: [];
    id: number;
    deleted: boolean;
}

export async function getTopPosts(): Promise<PostType[]>{
    const topIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const data = await topIds.json();
    const topTenIds = data.slice(0,10); 
    const topTenStories = await Promise.all(topTenIds.map(async (element: string) => { 
        const data = await getStory(element); 
        return data; 
    }));
    return topTenStories;
}

export async function getStory(id: string): Promise<PostType>{
    const story = await fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty");
    const data = await story.json();       
    return data;
} 

export async function getComment(id: string): Promise<CommentType>{
    const comment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const data = await comment.json();
    return data;
}