import { connect } from 'react-redux';
import VipOrder from '../../components/Vip/VipOrder'
import { update_profile } from 'actions'
import { push } from 'connected-react-router'

function mapStateToProps(state) {
    const { profile } = state
    return {
        profile,
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
)(VipOrder);