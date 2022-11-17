import React from "react";
import OneItem from "../item/OneItem";
import { ListSideBar } from "../../utils/ListMenu";
import iconMenu from "/img/menu.png";

const SideBar: React.FC = () => {
  return (
    <aside className="hiddenScroll scrollStyle left-0 p-2 flex flex-col gap-y-5 w-1/5 fixed overflow-y-scroll h-[calc(100vh-60px)]">
      <div>
        <OneItem
          round
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          name="Luong Nguyen"
        />
      </div>
      <div>
        <OneItem
          round
          className="p-1 object-cover bg-slate-400"
          src={iconMenu}
          name="Menu"
        />
        {ListSideBar.map((item) => (
          <OneItem src={item.img} name={item.name} key={item.name} />
        ))}
      </div>
      <div>
        <OneItem
          round
          className="p-1 object-cover bg-slate-400"
          src={iconMenu}
          name="Menu"
        />
        {ListSideBar.map((item) => (
          <OneItem src={item.img} name={item.name} key={item.name} />
        ))}
      </div>
      <div>
        <OneItem
          round
          className="p-1 object-cover bg-slate-400"
          src={iconMenu}
          name="Menu"
        />
        {ListSideBar.map((item) => (
          <OneItem src={item.img} name={item.name} key={item.name} />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
