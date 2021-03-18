import Caller from '../../api/caller';

function Report() {
    return (
        <table>
            <tr>
                <th>Team Name</th>
                <th>Team Leader</th>
                <th>TL Extension</th>
                <th>Attempts</th>
                <th>Unique Called Numbers</th>
                <th>Answered</th>
                <th>less than 2 mins</th>
                <th> 2 mins (120 s)</th>
                <th> 7 mins (420 s)</th>
                <th>Unique Called Numbers (answered, more than 20 sec)</th>
                <th>% of answered</th>
                <th>% more than 2 mins</th>
                <th>% more than 7 mins</th>
                <th>Ratio 7m/2m</th>
                <th>% No Answer</th>
                <th>Total Call Duration</th>
            </tr>
            <Callers />
        </table>
    );
};

function Callers(props) {
    const callers = window.clientData.callers;

    return (
        <tbody>
            {callers.map((caller) =>
                <CallerRow key={caller.id} caller={caller} />
            )}
        </tbody>
    );
};

function CallerRow(props) {
    const caller = new Caller(props.caller);

    return (
        <tr>
            {/*Team Name*/}
            <td>
                {caller.team.name}
            </td>
            {/*Team Leader*/}
            <td>
                {caller.team.leader}
            </td>
            {/*TL extension*/}
            <td>
                {caller.extension}
            </td>
            {/*Attempts */}
            <td>
                {caller.getAttemptsAmount()}
            </td>
            {/*Unique Called Numbers */}
            <td>
                {caller.getCalledNumbersAmount()}
            </td>
            {/*Answered */}
            <td>
                {caller.getAnsweredAmount()}
            </td>
            {/*less than 2 mins */}
            <td>
                {caller.getCallsShorterThanAmount(2)}
            </td>
            {/*2 mins */}
            <td>
                {caller.getCallsLongerThanAmount(2)}
            </td>
            {/*7 mins */}
            <td>
                {caller.getCallsLongerThanAmount(7)}
            </td>
            {/* Unique Called Numbers (answered, more than 20 sec) */}
            <td>
                {caller.getCalledNumbersAmount({ 'answered': true })}
            </td>
            {/*% of answered*/}
            <td>
                {Math.round((caller.getAnsweredAmount() / caller.getAttemptsAmount()) * 100)}%
            </td>
            {/*% more than 2 mins*/}
            <td>
                {Math.round((caller.getCallsLongerThanAmount(2) / caller.getAttemptsAmount()) * 100)}%
            </td>
            {/*% more than 7 mins */}
            <td>
                {Math.round((caller.getCallsLongerThanAmount(7) / caller.getAttemptsAmount()) * 100)}%
            </td>
            {/*Ratio 7m/2m */}
            <td>
                {Math.round((caller.getCallsLongerThanAmount(2) / caller.getCallsLongerThanAmount(7)) * 100)}%
            </td>
            {/*% No Answer */}
            <td>
                {Math.round((caller.getNoAnswerAmount() / caller.getAttemptsAmount()) * 100)}%
            </td>
            {/*Total Call Duration */}
            <td>
                {caller.getTotalCallDuration()}
            </td>
        </tr>
    )
}

export default Report;