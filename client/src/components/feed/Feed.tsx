import React from "react";
import CreatePost from "../post/CreatePost";
import PostItem from "../post/PostItem";
const Feed: React.FC = () => {
  return (
    <div className="flex-1 max-w-lg p-3 w-full mx-[20%]">
      <CreatePost />
      <PostItem />
    </div>
  );
};

export default Feed;
