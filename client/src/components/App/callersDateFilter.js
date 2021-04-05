import React from 'react';
import {useState} from 'react';

function CallersDateFilter (props) {
    const [dates, setDates] = useState({startDate: new Date(), endDate: new Date()})

    return (
        <section>
            <h2>Filter</h2>
            <form>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={dates['startDate']}
                    onChange={setStartDate}
                />

                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={dates['endDate']}
                    onChange={setEndDate}
                />
            </form>
        </section>
    )

    function setStartDate(event) {
        setDates({...dates, startDate: event.target.value});
        props.setDateFilters({...dates, startDate: new Date(event.target.value)});
    }

    function setEndDate(event) {
        setDates({...dates, endDate: event.target.value});
        props.setDateFilters({...dates, startDate: new Date(event.target.value)})
    }
}

export default CallersDateFilter;