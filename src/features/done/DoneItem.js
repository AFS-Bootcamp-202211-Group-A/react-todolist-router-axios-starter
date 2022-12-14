import "../todo/TodoItem.css";

const DoneItem = (props) => {
  const { doneItem } = props;

  return (
    <div className="box" >
      <span className={"done"}>{doneItem.text}</span>
      <span className="times">
        &times;
      </span>
    </div>
  );
};

export default DoneItem;
