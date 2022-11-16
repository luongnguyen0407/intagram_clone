import iconWatch from "/img/watch.png";
import iconGame from "/img/game.png";
import iconFriend from "/img/frien.png";
import iconMarketplace from "/img/market.png";
interface ListSideBar {
  img: string;
  name: string;
}

export const ListSideBar: ListSideBar[] = [
  {
    img: iconWatch,
    name: "Watch",
  },
  {
    img: iconGame,
    name: "Trò chơi",
  },
  {
    img: iconFriend,
    name: "Bạn bè",
  },
  {
    img: iconMarketplace,
    name: "Marketplace",
  },
];
