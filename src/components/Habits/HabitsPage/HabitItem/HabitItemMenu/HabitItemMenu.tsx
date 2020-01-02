import React, { useRef, useState } from 'react';

import { IconButton, Menu } from '@material-ui/core';
import { WithStyles } from 'react-jss';
import { IHabit } from '../../../../../models/habit';

import MaterialDesignIcon from '../../../../basic/Material-Icon';
import HabitItemMenuContent from '../HabitItemMenuContent';
import habitItemMenuStyles from './HabitItemMenu.styles';

export interface IHabitItemMenuProps extends WithStyles<typeof habitItemMenuStyles> {
  content?: IHabit;
}

const HabitItemMenu: React.FC<IHabitItemMenuProps> = (props) => {
  const { content, classes } = props;
  const { id, dates } = content as IHabit;
  const [menuOpened, setMenuOpened] = useState(false);
  const menuHolderRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={classes.wrapper}>
      <IconButton
        ref={menuHolderRef}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <MaterialDesignIcon name="dots-vertical" />
      </IconButton>
      <Menu
        id={`habit-menu-${id}`}
        anchorEl={menuHolderRef.current}
        keepMounted
        open={menuOpened}
        onClose={ () => setMenuOpened(false) }
      >
        {/* TODO: complete menu content */}
        <HabitItemMenuContent
          icon="pencil"
          title="Edit"
        />
      </Menu>
    </div>
  );
};

export default HabitItemMenu;
