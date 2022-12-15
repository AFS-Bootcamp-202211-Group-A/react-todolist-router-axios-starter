import { useSelector } from "react-redux";
import DoneGroup from "./DoneGroup";

const DoneList = () => {
  // get the data from store
  const doneItems = useSelector((state) => {
    return state.todoList.filter((todo) => todo.done);
  });

  return (
    <>
      <DoneGroup doneItems={doneItems} />
    </>
  );
};

export default DoneList;
