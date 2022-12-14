import "../todo/TodoItem.css";

const DoneItem = (props) => {
  const { doneItem } = props;

  return (
    <div className="box" >
      <span>{doneItem.text}</span>
    </div>
  );
};

export default DoneItem;
