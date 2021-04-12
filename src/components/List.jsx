import React from "react";
import Listitem from "./Listitem";

const List = () => {
  return (
    <ul className="menu">
      <Listitem name="home" id={1} />
      <Listitem name="Service" id={2} />
      <Listitem name="Contact" id={3} />
    </ul>
  );
};

export default List;
