import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CallerRow from './CallerRow'

const useStyles = makeStyles({
    table: {
        minWidTableCell: 650,
    },
});

const CallersTable = props => {
    const classes = useStyles();
    const { callers } = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">TL Extension</TableCell>
                        <TableCell align="right">Team Leader</TableCell>
                        <TableCell align="right">Handle</TableCell>
                        <TableCell align="right">Attempts</TableCell>
                        <TableCell align="right">Unique Called Numbers</TableCell>
                        <TableCell align="right">Answered (more than 20sec)</TableCell>
                        <TableCell align="right">less Than 2 mins</TableCell>
                        <TableCell align="right"> 2 mins (120 s)</TableCell>
                        <TableCell align="right"> 7 mins (420 s)</TableCell>
                        <TableCell align="right">% of answered</TableCell>
                        <TableCell align="right">% more TableCellan 2 mins</TableCell>
                        <TableCell align="right">% more TableCellan 7 mins</TableCell>
                        <TableCell align="right">Ratio 7m/2m</TableCell>
                        <TableCell align="right">% No Answer</TableCell>
                        <TableCell align="right">Total Call Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {callers.map((caller, idx) => <CallerRow key={idx} {...caller} />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CallersTable;