import React, {useState} from 'react';
import "./Search.css";
import { DateRangePicker } from "react-date-range";
// main style file for date picker:
import "react-date-range/dist/styles.css";
//theme css file:
import "react-date-range/dist/theme/default.css";


function SearchDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    };

    function handleSelect(range){
        //set the start date for whatever range you selected
        setStartDate(range.selection.startDate)
        //set the end date for whatever range you selected
        setEndDate(range.selection.endDate)
    }

    return (
        <div className="search_date">
            {/* pass in the array object, then onchange we pass in the handleSelect function (which sets the dates) */}
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            
        </div>
    )
}

export default SearchDate
