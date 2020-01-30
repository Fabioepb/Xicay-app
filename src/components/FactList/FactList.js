import React, { memo } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Row, Col, Button } from "reactstrap";
import FactListItem from "../FactListItem/FactListItem";
import { useDispatch } from "react-redux";
import { clearFactList } from "../../redux/actions/factActions";
import "./FactList.css";

const FactList = () => {
  const facts = useSelector(state => state.factList);
  const dispatch = useDispatch();

  const handleClearFacts = () => {
    dispatch(clearFactList());
  };
  return (
    <>
      <Row className="fact-list-header">
        <Col>
          <h5 className="mt-2 text-white font-weight-bold">
            Fact History
          </h5>
        </Col>
        <Col>
          <Button color="danger" onClick={handleClearFacts}>
            Clear
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <ListGroup className="w-100 p-2 fact-list">
          {facts &&
            (facts.length !== 0 ? (
              //Checks to see if the store has loaded, and then it maps the Facts
              facts.map(fact => (
                <FactListItem
                  key={Math.floor(Math.random() * 9999)}
                  fact={fact}
                />
              ))
            ) : (
              <div className='history-message'>
                <img src='https://cdn2.iconfinder.com/data/icons/videoplayer/1000/Search-512.png' width='75px' className='ml-auto mr-auto' alt=''/>
                <h4 className='font-weight text-white'>Looks like you haven't searched for any facts</h4>
                <h5 className='text-light'>Use the search bar to find a fact of a specific date!</h5>
              </div>
            ))}
        </ListGroup>
      </Row>
    </>
  );
};

export default memo(FactList);
