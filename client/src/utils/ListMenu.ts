import iconWatch from "/img/watch.png";
import iconGame from "/img/game.png";
import iconFriend from "/img/frien.png";
import iconMarketplace from "/img/market.png";
import iconCamera from "/img/camera.png";
import iconPhoto from "/img/photo.png";
import iconSm from "/img/sm.png";

interface ListSideBar {
  id: number;
  img: string;
  name: string;
}

export const ListSideBar: ListSideBar[] = [
  {
    id: 1,
    img: iconWatch,
    name: "Watch",
  },
  {
    id: 2,
    img: iconGame,
    name: "Trò chơi",
  },
  {
    id: 3,
    img: iconFriend,
    name: "Bạn bè",
  },
  {
    id: 4,
    img: iconMarketplace,
    name: "Marketplace",
  },
];

export const ListActionPost: ListSideBar[] = [
  {
    id: 1,
    img: iconCamera,
    name: "Video trực tiếp",
  },
  {
    id: 2,
    img: iconPhoto,
    name: "Ảnh/video",
  },
  {
    id: 3,
    img: iconSm,
    name: "Feeling/activity",
  },
];
