import React from 'react';

const Caller = props => {
    const {attempts, id, handle, name, extenstion, teamId, idTeam} = props;
    
    return (
        <div className='caller'>
            <ul>
                <li>attempts: {JSON.stringify(attempts)}</li>
                <li>id: {id}</li>
                <li>handle: {handle}</li>
                <li>name: {name}</li>
                <li>extenstion: {extenstion}</li>
                <li>teamId: {teamId}</li>
                <li>idTeam: {idTeam}</li>
            </ul>
        </div>
    );

};

export default Caller;