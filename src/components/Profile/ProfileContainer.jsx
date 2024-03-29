
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.router.params.userId
    if(!userId) {
      
      
      // userId = 1049;
      userId = this.props.authorizedUserId;
    }
    
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
    
  }

  render () {
    return (
        <Profile {...this.props} 
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.useId,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props}router={{location, navigate, params}} />) 
  }
  return ComponentWithRouterProp;
}

export default compose(
  WithUrlDataContainerComponent,
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus})
  // WithUrlDataContainerComponent,
  // withAuthRedirect
)(ProfileContainer)
// export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent(AuthRedirectComponent));

