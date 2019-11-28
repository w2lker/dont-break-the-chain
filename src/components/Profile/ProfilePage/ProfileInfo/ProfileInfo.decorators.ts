import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';

import ProfileInfo, { IProfileInfoProps } from './ProfileInfo';
import profileInfoStyles from './ProfileInfo.styles';

import { IProfileReducer } from '../../../../models/profile';

const mapStateToProps = (state: any): IProfileInfoProps => {
  const profile: IProfileReducer = state.profile;
  return {
    avatar: profile.avatar,
    name: profile.name,
    email: profile.email,
  };
};

const mapDispatchToProps = null;

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

const styledComponent = withStyles(profileInfoStyles)(connectedComponent);

export default styledComponent;
