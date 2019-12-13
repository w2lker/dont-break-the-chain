import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProfilePage from '../ProfilePage';

interface IProfileRouterProps extends RouteComponentProps<any> {
}

const ProfileRouter: React.FC<IProfileRouterProps> = (props) => {
  const {} = props;
  return <ProfilePage />;
};

export default ProfileRouter;
