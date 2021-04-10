import React from 'react'
import { connect } from 'react-redux'
import { createSetCallersAction } from '../../reducers/callersReducer/actions'
import { createApiAction } from '../../middleware/apiMiddleware/actions'
import { CALLERS_ADD } from '../../constants';
import Caller from './Caller';

class Callers extends React.PureComponent {
    componentDidMount() {
        this.props.createApiAction({
            url: CALLERS_ADD,
            // params: {id: 6},
            onSuccess: response => {
                console.log(response.data)
                this.props.createSetCallersAction(response.data);
            }
        });
    }

    render() {
        const { callers } = this.props;

        return (
            <div>
                {callers.map((caller, idx) => <Caller key={idx} {...caller} />)}
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    callers: state.callers
})

const mapsDispatchToProps = { createSetCallersAction, createApiAction };

export default connect(mapsStateToProps, mapsDispatchToProps)(Callers);