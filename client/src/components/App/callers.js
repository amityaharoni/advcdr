import React from 'react';
import CallersReport from './callersReport';
import CallersDateFilter from './callersDateFilter';
import {useState} from 'react';

function Callers() {
    const [dates, setDates] = useState({startDate: new Date(), endDate: new Date()})

    return(
        <React.Fragment>
            <h1>AdvCDR</h1>
            <CallersReport dateFilter={dates} />
            <CallersDateFilter setDateFilters={setDateFilters} />
        </React.Fragment>
    )

    function setDateFilters(dates) {
        setDates(dates);
    }
}

export default Callers;
