import withStyles from '@material-ui/core/styles/withStyles';
import { Dispatch } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from './ProfileHeader';
import profileHeaderStyles from './ProfileHeader.styles';

import { logout } from '../../../../actions/auth';

const mapStateToProps = null;
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    logout: () => dispatch(logout()),
  };
};

// @ts-ignore
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);


const styledComponent = withStyles(profileHeaderStyles)(connectedComponent);

export default styledComponent;
