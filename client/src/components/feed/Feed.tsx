import React from "react";
import CreatePost from "../post/CreatePost";
const Feed: React.FC = () => {
  return (
    <div className="flex-1 max-w-lg p-3 w-full mx-[20%]">
      <CreatePost />
    </div>
  );
};

export default Feed;
