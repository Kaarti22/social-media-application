"use client";
import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    try {
      const userId = "test-user-id";
      await axios.post("/api/posts", { content, userId });
      alert("Post Created");
    } catch (error) {
      alert("Failed to create post");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <textarea
        placeholder="What's on your mind?"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
