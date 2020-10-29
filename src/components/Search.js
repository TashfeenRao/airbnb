import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from '@material-ui/icons/People';
import { DateRangePicker } from "react-date-range";
import "../css/Search.css";
import { Button } from "@material-ui/core";

export default function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleRange(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
    <DateRangePicker ranges={[selectionRange]} onChange={handleRange} />
    <h2>Number Of guests <PeopleIcon /> </h2>
    <input min={0} defaultValue={2} type="number" />
    <Button>Search Airbnb</Button>
    </div>
  );
}
