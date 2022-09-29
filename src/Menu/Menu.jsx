import MenuItem from "./MenuItem.jsx";

const Menu = (props) => {
  if (props.menu.length) {
    return (
      <div className="menu">
        {props.menu.map((item, index) => (
          <MenuItem
            key={item.id}
            item={item}
            index={index}
            data={props}
            menu={props.mainMenu}
            location={props.location}
            changeEvent={props.changeEvent}
          />
        ))}
      </div>
    );
  } else {
    return <div>{props.depth ? "Children" : "Insert menu item"}</div>;
  }
};

export default Menu;
