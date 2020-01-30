import React from "react";
import { useSelector } from "react-redux";

const FactDetails = () => {
  const selectedFact = useSelector(state => state.selectedFact);

  return (
    <>
      {selectedFact ? (
        <div>
          <img
            alt=""
            src="https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_light-512.png"
            width="75px"
          />
          <h4 className="text-white">{selectedFact.text}</h4>
        </div>
      ) : (
        <div>
          <img
            alt=""
            src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699311-icon-40-clipboard-list-512.png"
            width="75px"
          />
          <h4 className="text-white mt-2">
            You haven't selected a fact to be displayed yet.
          </h4>
        </div>
      )}
    </>
  );
};

export default FactDetails;
