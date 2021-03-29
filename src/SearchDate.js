import React, { useState } from "react";
import "./SearchDate.css";
import { DateRangePicker } from "react-date-range";
// main style file for date picker:
import "react-date-range/dist/styles.css";
//theme css file:
import "react-date-range/dist/theme/default.css";
import People from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

function SearchDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    //set the start date for whatever range you selected
    setStartDate(range.selection.startDate);
    //set the end date for whatever range you selected
    setEndDate(range.selection.endDate);
  }

  return (
    <div className="search_date">
      {/* pass in the array object, then onchange we pass in the handleSelect function (which sets the dates) */}
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div>
        <h1 className="guest">Guests: <People/><br></br><input min={1} type="number" placeholder="Add guests" /></h1>
        
        <Button Style="color: #ff7779; background:white; font-weight:bold; margin-top:5px; margin-left:440px;">
          Search Airbnb
        </Button>
      </div>
    </div>
  );
}

export default SearchDate;
