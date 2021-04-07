import React from 'react'
import { connect } from 'react-redux'
import { createSetTeamsAction } from '../../reducers/teamsReducer/actions'
import { createApiAction } from '../../middleware/apiMiddleware/actions'

class Teams extends React.PureComponent {
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Teams()
                {JSON.stringify(this.props.teams)}
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    teams: state.teams
})

const mapsDispatchToProps = {createSetTeamsAction, createApiAction}

export default connect(mapsStateToProps, mapsDispatchToProps)(Teams);