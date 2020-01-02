import React from 'react';

import { MenuItem } from '@material-ui/core';
import { WithStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import MaterialDesignIcon from '../../../../basic/Material-Icon';
import habitItemMenuContentStyles from './HabitItemMenuContent.styles';

export interface IHabitItemMenuContentProps extends WithStyles<typeof habitItemMenuContentStyles> {
  icon: string;
  title: string;
  action?: () => void;
  url?: string;
}

const HabitItemMenuContent: React.FC<IHabitItemMenuContentProps> = (props) => {
  const { icon, classes, title, action, url } = props;
  const menuContent = (
    <div className={classes.root}>
      <MaterialDesignIcon
        className={classes.icon}
        name={icon}
      />
      <span className={classes.text}>
        {title}
      </span>
    </div>
  );
  if (action) {
    return (
      <MenuItem onClick={action}>
        {menuContent}
      </MenuItem>
    );
  }
  return (
    <MenuItem
      component={Link as React.ElementType}
      to={url}
    >
      {menuContent}
    </MenuItem>
  );
};

export default HabitItemMenuContent;
