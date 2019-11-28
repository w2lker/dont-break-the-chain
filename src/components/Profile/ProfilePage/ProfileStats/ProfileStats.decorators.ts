import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { IProfileReducer } from '../../../../models/profile';

import ProfileStats, { IProfileStatsProps } from './ProfileStats';
import profileStatsStyles from './ProfileStats.styles';

const mapStateToProps = (state: any): IProfileStatsProps => {
  const profile: IProfileReducer = state.profile;
  return {
    total: profile.points,
    days: profile.longestChain,
  };
};

const mapDispatchToProps = null;

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileStats);

// @ts-ignore
const styledComponent = withStyles(profileStatsStyles)(connectedComponent);

export default styledComponent;
