import React, { useState, memo } from "react";
import { Input, Button, Col, Spinner } from "reactstrap";
import { useDispatch } from "react-redux";
import Select from "react-select";
import monthEnum from "../../helpers/monthENUM";
import { addNewFact } from "../../redux/actions/factActions";
import "./SearchBar.css";
import {toast} from 'react-toastify'

const Searchbar = () => {
  const [monthValue, setMonthValue] = useState({ value: 1, label: "January" });
  const [dayValue, setDayValue] = useState(1);
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  const handleDayChange = e => {
    if (e.target.value > 31) {
      return setDayValue(31);
    } else if (e.target.value < 1) {
      return setDayValue(1);
    }
    setDayValue(e.target.value);
  };

  const handleMonthChange = newSelection => {
    setMonthValue(newSelection);
  };

  const handleFetchFact = async () => {
    setLoading(true)
    let response = await fetch(
      `https://numbersapi.p.rapidapi.com/${monthValue.value}/${dayValue}/date`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Host: "numbersapi.p.rapidapi.com",
          // Although it is a bad practice, I will leave my API key for time purposes, normally
          // I would set it up as an environment variable
          "x-rapidapi-key": "c0c39163e0msh9f385bbaf7f683bp180bf0jsn0f58362f0f8d"
        }
      }
    );

    response = await response.json();

    if (response.found) {
      dispatch(
        addNewFact({
          ...response,
          date: `${monthValue.value}/${dayValue}`
        })
      );
    }else{
      toast.error('Could not retrieve fact, please try again',{autoClose:1000})

    }

    setLoading(false)
  };

  return (
    <>
      <Col>
        <Select
          options={monthEnum}
          value={monthValue}
          onChange={handleMonthChange}
        />
      </Col>
      <Col>
        <Input
          type="number"
          value={dayValue}
          max={31}
          min={1}
          onChange={handleDayChange}
        />
      </Col>

      <Col>
        <Button color="primary" block onClick={handleFetchFact}>
          {loading?(<Spinner/>):('Find a Fact')}
        </Button>
      </Col>
    </>
  );
};

export default memo(Searchbar);
