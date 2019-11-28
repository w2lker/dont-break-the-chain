import * as React from 'react';

import { IconButton } from '@material-ui/core';
import defaultTexts from '../../../../contants/defaultTexts';

import MaterialDesignIcon from '../../../basic/Material-Icon';

export interface IProfileHeaderProps {
  classes?: any;
  logout?: () => void;
}

const ProfileHeader: React.FC<IProfileHeaderProps> = (props) => {
  const { classes, logout } = props;
  const texts = defaultTexts.profile.header;
  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        {texts.title}
      </h3>
      <IconButton
        className={classes.button}
        onClick={logout}
      >
        <MaterialDesignIcon
          name="logout"
          className="header-icon"
        />
      </IconButton>
    </div>
  );
};

ProfileHeader.defaultProps = {
  classes: {
    root: '',
    title: '',
    button: '',
  },
};

export default ProfileHeader;
