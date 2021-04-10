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
        minWidth: 650,
    },
});

const CallersTable = props => {
    const classes = useStyles();
    const {callers} = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">name</TableCell>
                        {/* <TableCell>attempts</TableCell> */}
                        <TableCell align="right">handle</TableCell>
                        <TableCell align="right">extenstion</TableCell>
                        <TableCell align="right">teamId</TableCell>
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