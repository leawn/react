import React, { useEffect, useState } from 'react';

export const useJazzyNews = () => {
    const [posts, setPosts] = useState([]);
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    useEffect(() => {
        newsFeed.subscribe(addPost);
        return () => newsFeed.unsubscribe(addPost);
    }, []);

    useEffect(() => {
        welcomeChime.play();
        return () => goodbyeChime.play();
    }, []);

    return posts;
}
