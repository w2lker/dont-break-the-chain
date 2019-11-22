import React from 'react';

import { StyledComponentProps } from '@material-ui/core';
import NavigationMenu from '../NavigationMenu';

const LayoutWrapper: React.FC<StyledComponentProps> = (props) => {
  const { children } = props;
  const classes = props.classes || {};
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        {children}
      </div>
      <NavigationMenu/>
    </div>
  );
};

export default LayoutWrapper;
