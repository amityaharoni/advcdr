import React from 'react'
import Caller from '../../api/callers/caller';

function Report(props) {
    const columns = [
        {column: 'team_name', title: 'Team Name'},
        {column: 'team_leader', title: 'Team Leader'},
        {column: 'extension', title: 'TL Extension'},
        {column: 'attempts', title: 'Attempts'},
        {column: 'called_numbers', title: 'Unique Called Numbers'},
        {column: 'answered', title: 'Answered'},
        {column: 'lttwomin', title: 'less than 2 mins'},
        {column: 'ltsevenmin', title: '7 mins (420 s)'},
        {column: 'mttwomin', title: '2 mins (120 s)'},
        {column: 'mtsevenmin', title: '7 mins (420 s)'},
        {column: 'unique_answered_numbers', title: 'Unique Called Numbers (answered, more than 20 sec)'},
        {column: 'percent_answered', title: '% of answered'},
        {column: 'percent_mttwomin', title: '% more than 2 mins'},
        {column: 'percent_mtsevenmin', title: '% more than 7 mins'},
        {column: 'ratio_seven_two', title: 'Ratio 7m/2m'},
        {column: 'percent_no_answer', title: '% No Answer'},
        {column: 'total_call_duration', title: 'Total Call Duration'}
    ]

    return (
        <table>
            <tr>
                {columns.map((column) => <th>{column.title}</th>)}
            </tr>
            <Callers columns={columns} dateFilter={props.dateFilter} />
        </table>
    );
};

function Callers(props) {
    const callers = window.clientData.callers;

    return (
        <tbody>
            {callers.map((caller) =>
                <CallerRow columns={props.columns} key={caller.id} caller={caller} />
            )}
        </tbody>
    );
};

function CallerRow(props) {
    const caller = new Caller(props.caller);
    const columns = props.columns;
    const callerColumns = {
        'team_name': caller.team.name,
        'team_leader': caller.team.leader,
        'extension': caller.extension,
        'attempts': caller.getAttemptsAmount(),
        'called_numbers': caller.getCalledNumbersAmount(),
        'answered': caller.getAnsweredAmount(),
        'lttwomin': caller.getCallsShorterThanAmount(2),
        'ltsevenmin': caller.getCallsLongerThanAmount(7),
        'mttwomin': caller.getCallsLongerThanAmount(2),
        'mtsevenmin': caller.getCallsLongerThanAmount(7), 
        'unique_answered_numbers': caller.getCalledNumbersAmount({ 'answered': true }),
        'percent_answered': Math.round((caller.getAnsweredAmount() / caller.getAttemptsAmount()) * 100) + '%',
        'percent_mttwomin': Math.round((caller.getCallsLongerThanAmount(2) / caller.getAttemptsAmount()) * 100) + '%',
        'percent_mtsevenmin': Math.round((caller.getCallsLongerThanAmount(7) / caller.getAttemptsAmount()) * 100) + '%',
        'ratio_seven_two': Math.round((caller.getCallsLongerThanAmount(7) / caller.getCallsLongerThanAmount(2)) * 100) + '%',
        'percent_no_answer': Math.round((caller.getNoAnswerAmount() / caller.getAttemptsAmount()) * 100) + '%',
        'total_call_duration': caller.getTotalCallDuration() 
    };

    return (
        <tr>
            {columns.map((column) => {
                <td key={column.column}>{callerColumns[column.column]}</td>
            })}
        </tr>
    )
}

export default Report;