import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IProfileRouterProps extends RouteComponentProps<any> {
}

const ProfileRouter: React.FC<IProfileRouterProps> = (props) => {
  // tslint:disable-next-line:no-console
  console.log('-----', 'profile renders');
  return (
    <div>
      <h4> This is a profile </h4>
    </div>
  );
};

export default ProfileRouter;
