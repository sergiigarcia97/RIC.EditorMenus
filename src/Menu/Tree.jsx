import { useId } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Menu from "./Menu";

const Tree = ({ menu, changeEvent }) => {
  return (
    
      <Menu
        menu={menu}
        mainMenu={menu}
        changeEvent={changeEvent}
        depth={0}
        location="menu-item"
      />
  );
};

export default Tree;
