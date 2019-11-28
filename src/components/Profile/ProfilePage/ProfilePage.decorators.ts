import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../../actions/profile';
import { IProfileReducer } from '../../../models/profile';
import ProfilePage, { IProfilePageProps } from './ProfilePage';

const mapStateToProps = (state: any): IProfilePageProps => {
  const profile: IProfileReducer = state.profile;
  // @ts-ignore
  return {
    id: profile.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IProfilePageProps => {
  return {
    getProfile: () => dispatch(getProfile()),
  };
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default connectedComponent;
