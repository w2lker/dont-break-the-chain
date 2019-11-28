import * as React from 'react';
import { avatarPlaceholder } from '../../../../contants/ui';

export interface IProfileInfoProps {
  avatar?: string;
  name?: string;
  email?: string;
  classes?: any;
}

const ProfileInfo: React.FC<IProfileInfoProps> = (props) => {
  const { name, email, classes } = props;
  const avatar = props.avatar || avatarPlaceholder;
  const avatarStyles = {
    backgroundImage: `url(${avatar})`,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar} style={avatarStyles} />
      <h2 className={classes.name}>{name}</h2>
      <p className={classes.email}>{email}</p>
    </div>
  );
};

ProfileInfo.defaultProps = {
  name: '',
  email: '',
  classes: {
    wrapper: '',
    avatar: '',
    name: '',
    email: '',
  },
};

export default ProfileInfo;
