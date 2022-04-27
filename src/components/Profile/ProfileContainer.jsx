
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.router.params.userId

    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render () {
    return (
        <Profile {...this.props} profile={this.props.profile} />
    )
  }
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
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
  connect (mapStateToProps, {getUserProfile}),
  WithUrlDataContainerComponent,
  withAuthRedirect
)(ProfileContainer)
// export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent(AuthRedirectComponent));

