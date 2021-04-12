import React from 'react';
import { connect } from 'react-redux'
import { editCallerAction } from '../../../../reducers/callersReducer/actions'
import { createApiAction } from '../../../../middleware/apiMiddleware/actions'
import { CALLERS_ADD } from '../../../../constants';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class CallerRow extends React.Component {
    componentDidMount() {
        const { extension } = this.props;
        this.props.createApiAction({
            url: `${CALLERS_ADD}/calls/${extension}`,
            // params: {id: 6},
            onSuccess: response => {
                this.props.editCallerAction(response.data);
            },
            onError: res => { console.log(res) }
        });
    }

    render() {
        const { id, handle, name, extension, teamId, idTeam } = this.props;

        const { caller } = this.props;

        return (
            <TableRow key={extension}>
                <TableCell component="th" scope="extension">{extension}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{handle}</TableCell>
                <TableCell align="right">{caller.attempts instanceof Object ? "" : caller.attempts}</TableCell>
                <TableCell align="right">{caller.amountCalledNumbers}</TableCell>
                <TableCell align="right">{caller.answeredAttempts}</TableCell>
                <TableCell align="right">{caller.lt2min}</TableCell>
                <TableCell align="right">{caller.gt2min}</TableCell>
                <TableCell align="right">{caller.gt7min}</TableCell>
                <TableCell align="right">{toPercent(caller.answeredRatio)}%</TableCell>
                <TableCell align="right">{toPercent(caller.gt2minRatio)}%</TableCell>
                <TableCell align="right">{toPercent(caller.gt7minRatio)}%</TableCell>
                <TableCell align="right">{toPercent(caller.gt2minToGt7minRatio)}%</TableCell>
                <TableCell align="right">{toPercent(caller.failedAttemptsRatio)}%</TableCell>
                <TableCell align="right">{caller.totalCallsDuration}</TableCell>
            </TableRow>
        );
    }
}

const mapsStateToProps = (state, prop) => ({
    caller: state.callers.find(caller =>
        caller['extension'] === prop.extension
    )
})


const toPercent = number => {
    return (Number(number) * 100).toFixed(2);
}

const mapsDispatchToProps = { createApiAction, editCallerAction };

export default connect(mapsStateToProps, mapsDispatchToProps)(CallerRow);