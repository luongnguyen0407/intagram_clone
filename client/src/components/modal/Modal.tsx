import React, { useRef } from "react";

interface PropModal {
  children: JSX.Element;
  setClose: Function;
}

const Modal: React.FC<PropModal> = ({ children, setClose }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
      setClose();
    }
  };
  return (
    <div
      onClick={(e) => handleClose(e)}
      className="fixed z-20 inset-0 bg-white/50 backdrop-blur-backdropModal flex items-center justify-center"
    >
      <div ref={nodeRef}>{children}</div>
    </div>
  );
};

export default Modal;
