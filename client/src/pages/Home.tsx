import Feed from "../components/feed/Feed";
import RightBar from "../components/rightbar/RightBar";
import SideBar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="bg-secondary h-[calc(100vh-64px)] px-2">
      <div className="flex justify-between">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
