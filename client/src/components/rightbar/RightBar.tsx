import React from "react";
import OneItem from "../item/OneItem";

const RightBar: React.FC = () => {
  return (
    <aside className="hiddenScroll scrollStyle right-0 p-2 flex flex-col gap-y-5 w-1/5 fixed overflow-y-scroll h-[calc(100vh-60px)]">
      <h3 className="font-semibold">Người Liên Hệ</h3>
      <div>
        {new Array(10).fill(0).map(() => (
          <OneItem
            round
            src="https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            name="Nguyễn Văn A"
          />
        ))}
      </div>
    </aside>
  );
};

export default RightBar;
