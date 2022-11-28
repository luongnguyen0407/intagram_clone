import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
const PostItem: React.FC = () => {
  return (
    <div className="my-3 rounded-lg py-3 bg-white">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div>
              <p className="font-semibold">Lê Đình Tuấn</p>
              <p className="text-xs text-gray-400">15 phút trước</p>
            </div>
          </div>
          <p className="cursor-pointer p-2 rounded-full hover:bg-slate-200 transition-colors">
            <AiOutlineEllipsis />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
