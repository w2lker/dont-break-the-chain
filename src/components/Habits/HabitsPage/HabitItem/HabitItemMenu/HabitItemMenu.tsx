// tslint:disable:no-console
import React, { useRef, useState } from 'react';

import { IconButton, Menu } from '@material-ui/core';
import { List } from 'immutable';
import { WithStyles } from 'react-jss';
import defaultTexts from '../../../../../contants/defaultTexts';

import MaterialDesignIcon from '../../../../basic/Material-Icon';
import HabitItemMenuContent from '../HabitItemMenuContent';
import habitItemMenuStyles from './HabitItemMenu.styles';

import { routing } from '../../../../../contants/routing';
import { habitStatus, IHabit } from '../../../../../models/habit';

export interface IHabitItemMenuProps extends WithStyles<typeof habitItemMenuStyles> {
  content?: IHabit;
  onCheck: () => void;
  onUncheck: () => void;
  onPause: () => void;
  onDelete: () => void;
}

const HabitItemMenu: React.FC<IHabitItemMenuProps> = (props) => {
  const {
    content,
    classes,
    onCheck,
    onUncheck,
    onPause,
    onDelete,
  } = props;

  const [menuOpened, setMenuOpened] = useState(false);
  const menuHolderRef = useRef<HTMLDivElement>(null);

  if (!content) {
    return  null;
  }

  const texts = defaultTexts.habits.item.menu;
  const habitsRouting = routing.habits;
  const { id, dates } = content as IHabit;
  // @ts-ignore
  const latestDate = dates && List.isList(dates) && dates.get(0);
  const isTodayCompleted = latestDate && latestDate.status === habitStatus.end;
  const linkToUpdate = id ? habitsRouting.root + habitsRouting.update.slice(-2) + id : '';

  return (
    <div
      ref={menuHolderRef}
      className={classes.wrapper}
    >
      <IconButton
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
        {isTodayCompleted && (
          <HabitItemMenuContent
            icon="minus"
            title={texts.unmark}
            action={onUncheck}
          />
        )}

        {!isTodayCompleted && (
          <HabitItemMenuContent
            icon="check"
            title={texts.mark}
            action={onCheck}
          />
        )}

        <HabitItemMenuContent
          icon="pencil"
          title={texts.edit}
          url={linkToUpdate}
        />
        <HabitItemMenuContent
          icon="pause"
          title={texts.pause}
          action={onPause}
        />

        <HabitItemMenuContent
          icon="delete"
          title={texts.delete}
          action={onDelete}
        />
      </Menu>
    </div>
  );
};

// tslint:enable:no-console
export default HabitItemMenu;
