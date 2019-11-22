import React from 'react';

import { BottomNavigationAction } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import MaterialDesignIcon from '../../basic/Material-Icon';

export interface INavMenuItemProps  {
  url: string;
  label: string;
  icon: string;
  // Decorator property
  classes?: any;
}

export class DecoratedNavLink extends React.Component<NavLinkProps> {
  // @ts-ignore
  displayName: 'DecoratedNavLink';
  render() {
    // @ts-ignore
    return (<NavLink {...this.props} activeClassName="Mui-selected" />);
  }
}

const NavigationMenuItem: React.FC<INavMenuItemProps> = (props) => {
  const { url, label, icon, classes } = props;
  const iconRender = (
    <MaterialDesignIcon
      className={classes.icon}
      name={icon}
    />
  );

  // @ts-ignore
  return (
    // @ts-ignore
    <BottomNavigationAction
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      component={DecoratedNavLink}
      to={url}
      label={label}
      icon={iconRender}
      showLabel={true}
    />
  );
};

NavigationMenuItem.defaultProps = {
  url: '/',
  icon: '',
  classes: {},
};

export default NavigationMenuItem;
