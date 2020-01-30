import React from "react";
import { ListGroupItem, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectFact, deleteFact } from "../../redux/actions/factActions";
import { toast } from "react-toastify";
import "./FactListItem.css";

const FactListItem = ({ fact }) => {
  const dispatch = useDispatch();
  const selectedFact = useSelector(state => state.selectedFact);

  const handleSelectItem = () => {
    dispatch(selectFact(fact));
  };

  const handleDeleteItem = () => {
    dispatch(deleteFact(fact));
    toast.success("Deleted fact", { autoClose: 1500 });
  };

  return (
    <div className="d-flex">
      <ListGroupItem
        onClick={handleSelectItem}
        active={selectedFact === fact}
        className="mt-1 mb-1 w-75"
      >
        {fact.date}
      </ListGroupItem>
      <Button
        color="danger"
        className="w-25 m-1"
        block
        onClick={handleDeleteItem}
        title="Delete this fact"
      >
        X
      </Button>
    </div>
  );
};

export default FactListItem;
