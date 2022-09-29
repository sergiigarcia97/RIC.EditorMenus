import { useDrop } from "react-dnd";

const Drop = (props) => {
  const child = typeof props.child !== "undefined" ? props.child : false;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "menu-item",
    drop: () => ({ index: props.index, child: child }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isOverClass = isOver ? "is-over" : "";
  return (
    <div className={`dropzone ${isOverClass}`} ref={drop}>
      {props.title}
    </div>
  );
};

export default Drop;
