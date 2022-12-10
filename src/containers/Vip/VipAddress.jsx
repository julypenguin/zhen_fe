import { connect } from 'react-redux';
import VipAddress from '../../components/Vip/VipAddress'
import { update_profile } from 'actions'
import { push } from 'connected-react-router'

function mapStateToProps(state) {
    const { profile, firebase } = state
    const { db } = firebase
    return {
        profile,
        db,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateProfile: data => dispatch(update_profile(data)),
        push: (path, state) => dispatch(push(path, state)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VipAddress);