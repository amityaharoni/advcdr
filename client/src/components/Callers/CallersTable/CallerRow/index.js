import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CallerRow = props => {
    const { id, handle, name, extenstion, teamId, idTeam } = props;

    return (
        <TableRow key={name}>
            <TableCell component="th" scope="name">{name}</TableCell>
            {/* <TableCell align="right">{attempts}</TableCell> */}
            <TableCell align="right">{handle}</TableCell>
            <TableCell align="right">{extenstion}</TableCell>
            <TableCell align="right">{teamId}</TableCell>
        </TableRow>
    );
}

export default CallerRow
