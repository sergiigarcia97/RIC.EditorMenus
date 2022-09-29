import { useDrag } from "react-dnd";
import Drop from "./Drop.jsx";
import Menu from "./Menu.jsx";
import update from "immutability-helper";
import {
  getMenuItemPath,
  getNestedMenuItem,
  isMoveOnTheSameLevel,
  getNestedUpdateFunction,
  isDraggingParentIntoItself
} from "./helper";

const MenuItem = (props) => {
  const { item, index, data, menu, location, changeEvent } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      name: "",
      type: "menu-item",
      data: { ...item, currentPosition: `${location}-${index}` }
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        moveItem(
          item.data.currentPosition,
          dropResult.index,
          dropResult.child,
          menu
        );
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const moveItem = (from, to, addToChild, menu) => {
    const fromPath = getMenuItemPath(from);
    const lastElementFrom = fromPath[fromPath.length - 1];
    const toPath = getMenuItemPath(to);
    const itemCopy = getNestedMenuItem(fromPath, menu);
    const isTheSameLevel = isMoveOnTheSameLevel([...fromPath], [...toPath]);
    const intoItself = isDraggingParentIntoItself([...fromPath], [...toPath]);
    let lastElementTo = toPath[toPath.length - 1];

    if (intoItself) return;

    if (isTheSameLevel) {
      /** Moving elemenent on the same level */
      /** Moving element to the same position */
      if (lastElementTo - 1 === lastElementFrom && !addToChild) return;

      /** Moving element down */
      /** Lower index because of removal */
      if (lastElementFrom < lastElementTo) {
        toPath[toPath.length - 1]--;
      }
    } else {
      /** Lower index on the level that element is coming from */
      if (lastElementFrom < toPath[fromPath.length - 1]) {
        toPath[fromPath.length - 1]--;
      }
    }
    /** Remove item */
    const menuItemRemovedRules = getNestedUpdateFunction([...fromPath], {
      $splice: [[lastElementFrom, 1]]
    });

    /** Insert item copy to a new position */
    const insertFunction = addToChild
      ? { $push: [itemCopy] }
      : { $splice: [[lastElementTo, 0, itemCopy]] };

    const menuItemAddedRules = getNestedUpdateFunction(
      [...toPath],
      insertFunction,
      addToChild
    );
    /** Actual actions */
    const menuRemovedItem = update(menu, menuItemRemovedRules);
    const menuAddedItem = update(menuRemovedItem, menuItemAddedRules);

    /** Send info to callback function */
    changeEvent(menuAddedItem);
  };

  const renderFirstDropZone = (currentIndex) => {
    if (currentIndex === 0) {
      return (
        <div className="dropzone-wrapper">
          <Drop index={`${location}-${currentIndex}`} title="Same level" />
        </div>
      );
    } else {
      return <></>;
    }
  };

  const renderRecursiveMenu = (currentIndex, item, depth) => {
    if (item.children.length) {
      return (
        <Menu
          menu={item.children}
          mainMenu={menu}
          index={index}
          depth={data.depth + 1}
          location={`${location}-${currentIndex}`}
          changeEvent={changeEvent}
        />
      );
    } else {
      return <></>;
    }
  };

  const renderDropZones = (currentIndex) => {
    return (
      <div className="dropzone-wrapper">
        <Drop index={`${location}-${currentIndex + 1}`} title="Same level" />
        <Drop
          index={`${location}-${currentIndex}`}
          title="Child"
          child={true}
        />
      </div>
    );
  };

  const removeMenuItem = (location, item) => {
    const position = getMenuItemPath(location);
    const removeMenuItemFunction = getNestedUpdateFunction([...position], {
      $splice: [[position[position.length - 1], 1]]
    });
    const menuItemRemoveMenu = update(menu, removeMenuItemFunction);

    if (!item.children.length) return changeEvent(menuItemRemoveMenu);

    const children = item.children;
    const insertChildren = getNestedUpdateFunction([...position], {
      $splice: [[position[position.length - 1], 0, ...children]]
    });
    const childrenInsertedMenu = update(menuItemRemoveMenu, insertChildren);

    changeEvent(childrenInsertedMenu);
  };

  return (
    <>
      {renderFirstDropZone(index)}
      <div
        ref={drag}
        className={`menu-item menu-item-${props.depth}`}
        key={item.id}
      >
        <div className="menu-item-element">
          <span className="menu-item-name">{item.name}</span>
          <div
            className="menu-item-remove"
            onClick={() => removeMenuItem(`${location}-${index}`, item)}
          ></div>
        </div>
        {renderRecursiveMenu(index, item, props.depth)}
      </div>

      {renderDropZones(index)}
    </>
  );
};

export default MenuItem;
