import React, { useRef, useState, useEffect } from "react";

const Listitem = (props) => {
  const [popupStatus, setPopupStatus] = useState(false);
  const listRef = useRef(null);

  const handleOnClick = (e) => {
    if (popupStatus && listRef.current && !listRef.current.contains(e.target)) {
      e.preventDefault();
      setPopupStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOnClick);
    document.addEventListener("contextmenu", handleOnClick);

    return () => {
      document.removeEventListener("click", handleOnClick);
      document.removeEventListener("contextmenu", handleOnClick);
    };
  });

  const handleOnDelete = () => {
    console.log("delete");
    setPopupStatus(false);
  };

  const handleOnEdit = () => {
    console.log("edit");
    setPopupStatus(false);
  };

  return (
    <li
      className={`li-${props.id}`}
      ref={listRef}
      onContextMenu={(e) => {
        setPopupStatus(true);
        e.preventDefault();
      }}
    >
      {props.name}
      {popupStatus && (
        <div className="context-menu">
          <p>{props.name}</p>
          <p onClick={handleOnDelete}>delete</p>
          <p onClick={handleOnEdit}>edit</p>
        </div>
      )}
    </li>
  );
};

export default Listitem;
