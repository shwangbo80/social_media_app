import {useState, useEffect} from "react";

import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

import axios from "axios";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/6343cbff717b9352e82b2f75");

      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => <Post key={p._id} post={p} />).reverse()}
      </div>
    </div>
  );
}
