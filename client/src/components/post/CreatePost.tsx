import React, { useState } from "react";
import { ListActionPost } from "../../utils/ListMenu";
import OneItem from "../item/OneItem";
import Modal from "../modal/Modal";

const CreatePost: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="py-3 px-4 bg-white rounded-lg">
      <div className="flex items-center gap-x-2 border-b border-secondary pb-3">
        <img
          src="https://source.unsplash.com/random"
          className="rounded-full w-10 h-10 object-cover"
          alt=""
        />
        <div
          onClick={handleOpenModal}
          className="py-2 px-3 bg-secondary text-text flex-1 rounded-full hover:bg-slate-200 cursor-pointer"
        >
          Lương ơi bạn đang nghĩ gì thế
        </div>
        {openModal && <Modal setClose={handleCloseModal}>{<NewPost />}</Modal>}
      </div>
      <div className="flex text-sm mt-3">
        {ListActionPost.map((item) => (
          <OneItem
            onClick={handleOpenModal}
            name={item.name}
            src={item.img}
            key={item.id}
          ></OneItem>
        ))}
      </div>
    </div>
  );
};

const NewPost = () => {
  return (
    <div className="bg-white w-[500px] drop-shadow-2xl rounded-lg">
      <div className="p-4 border-b border-secondary">
        <h3 className=" text-center font-bold text-xl">Tạo bài viết</h3>
      </div>
      <div>
        <textarea
          placeholder="What do you mind"
          name="text_post"
          className="border-none w-full resize-none outline-none p-3"
        ></textarea>
      </div>
    </div>
  );
};

export default CreatePost;
