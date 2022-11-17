import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className="bg-white p-3 sticky top-0">
      <div className="container flex justify-between items-center">
        <div className="w-1/5">
          <Logo />
        </div>
        <div className="p-2 pl-3 bg-slate-200 w-3/5 max-w-lg rounded-full flex gap-x-2 items-center">
          <BsSearch />
          <input
            type="text"
            className="bg-transparent w-full text-base"
            placeholder="Tìm kiếm trên facebook"
          />
        </div>
        <div className="flex gap-x-2 items-center w-1/5 justify-end">
          <div className="p-3 bg-slate-200 cursor-pointer rounded-full">
            <FaFacebookMessenger />
          </div>
          <div className="p-3 bg-slate-200 cursor-pointer rounded-full">
            <FaBell />
          </div>
          <div className="w-[40px] h-[40px] overflow-hidden rounded-full cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="/assets/person/8.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
