import { FC } from "react";

interface PropItem {
  src: string;
  name: string;
  round?: boolean;
  size?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const OneItem: FC<PropItem> = ({
  src,
  name,
  round,
  size,
  className,
  onClick = (): void => {},
}) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-1 items-center p-1 hover:bg-slate-200 w-full cursor-pointer transition-all rounded-md"
    >
      <img
        className={`${(size ||= "h-6 w-6 m-1")} ${
          round ? "rounded-full" : ""
        } ${className}`}
        src={src}
        alt=""
      />
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default OneItem;
