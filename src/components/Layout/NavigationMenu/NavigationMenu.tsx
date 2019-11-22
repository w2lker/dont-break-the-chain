import React from 'react';

import { BottomNavigation } from '@material-ui/core';

import NavigationMenuItem from '../NavigationMenuItem';

import defaultTexts from '../../../contants/defaultTexts';
import { routing } from '../../../contants/routing';
import { defaultIcons } from '../../../contants/ui';

import { INavMenuItemProps } from '../NavigationMenuItem/NavigationMenuItem';

interface INavigationMenuProps {
  classes?: any;
}

interface INavConfig {
  chains: INavMenuItemProps;
  habits: INavMenuItemProps;
  profile: INavMenuItemProps;
}

const NavigationMenu: React.FC<INavigationMenuProps> = (props) => {
  const { classes } = props;
  const texts = defaultTexts.navigationMenu;
  const icons = defaultIcons.navigationMenu;

  // @ts-ignore
  const navConfig: INavConfig = {
    // @ts-ignore
    chains: {
      // @ts-ignore
      url: routing.chains,
      label: texts.chains,
      icon: icons.chains,
    },
    // @ts-ignore
    habits: {
      // @ts-ignore
      url: routing.habits,
      label: texts.habits,
      icon: icons.habits,
    },
    // @ts-ignore
    profile: {
      // @ts-ignore
      url: routing.profile,
      label: texts.profile,
      icon: icons.profile,
    },
  };

  // @ts-ignore
  const navigationActionsRender = Object.values(navConfig).map((config: INavMenuItemProps) => {
    return <NavigationMenuItem key={config.url} {...config} />;
  });

  return (
    <div className={classes.root}>
      <BottomNavigation>
        {navigationActionsRender}
      </BottomNavigation>
    </div>
  );

};

export default NavigationMenu;
