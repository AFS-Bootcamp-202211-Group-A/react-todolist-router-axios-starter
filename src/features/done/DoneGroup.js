import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
  return props.doneItems.map((doneItem) => {
    return <DoneItem doneItem={doneItem} key={doneItem.id} />;
  });
};

export default DoneGroup;
