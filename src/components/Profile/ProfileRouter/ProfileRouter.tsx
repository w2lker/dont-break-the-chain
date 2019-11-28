import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProfilePage from '../ProfilePage';

interface IProfileRouterProps extends RouteComponentProps<any> {
}

const ProfileRouter: React.FC<IProfileRouterProps> = (props) => {
  // tslint:disable-next-line:no-console
  console.log('-----', 'profile renders');
  return <ProfilePage />;
};

export default ProfileRouter;
