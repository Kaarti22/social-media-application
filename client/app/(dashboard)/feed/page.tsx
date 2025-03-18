"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Social Media Feed</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
