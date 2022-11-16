import OneItem from "../item/OneItem";
import { ListSideBar } from "../../utils/ListMenu";

const SideBar = () => {
  return (
    <div className="mt-2 p-2 flex flex-col gap-y-5 w-[20%]">
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
          size="h-8 w-8"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          name="Luong Nguyen"
        />
        {ListSideBar.map((item) => (
          <OneItem src={item.img} name={item.name} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
