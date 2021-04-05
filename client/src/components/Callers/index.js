import React from 'react'
import { connect } from 'react-redux'
import { createSetCallersAction } from '../../reducers/callersReducer/actions'
import { createApiAction } from '../../middleware/apiMiddleware/actions'

class Callers extends React.PureComponent {
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Callers()
                {JSON.stringify(this.props.callers)}
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    callers: state.callers
})

const mapsDispatchToProps = {createSetCallersAction, createApiAction}

export default connect(mapsStateToProps, mapsDispatchToProps)(Callers);