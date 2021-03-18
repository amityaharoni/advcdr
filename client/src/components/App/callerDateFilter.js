import React, { useState, setState } from 'react'

export const CallerDateForm = () => {
    const [startDate, setStartDate] = setState('')
    const [endDate, setEndDate] = useState('')

    return (
        <section>
            <h2>Filter</h2>
            <form>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value="{startDate}"
                />

                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value="{endDate}"
                />
                <button type="button">Filter</button>
            </form>
        </section>
    )
}