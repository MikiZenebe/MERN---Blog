import React, { useState, useEffect } from "react";
import { Banner, Post } from "../components";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`http://localhost:4000/posts${search}`);
      setPosts(res.data);
    };

    getPosts();
  }, [search]);

  return (
    <div>
      <Banner />

      <Post posts={posts} />
    </div>
  );
}
