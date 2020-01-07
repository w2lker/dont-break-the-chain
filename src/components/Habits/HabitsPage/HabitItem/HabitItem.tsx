import React from 'react';

import classNames from 'classnames';

import { habitStatus, IHabit } from '../../../../models/habit';
import MaterialDesignIcon from '../../../basic/Material-Icon';

import defaultTexts from '../../../../contants/defaultTexts';
import habitItemStyles from './HabitItem.styles';
import HabitItemMenu from './HabitItemMenu';

export interface IHabitItemProps {
  content: IHabit;
  isLast: boolean;
}

const HabitItem: React.FC<IHabitItemProps> = (props) => {
  const { content, isLast } = props;
  const { name, icon, color, dates, currentChain } = content;
  const classes = habitItemStyles(props);
  const texts = defaultTexts.habits.item;

  if (! (name && icon && color && dates && currentChain)) {
    return null;
  }

  const lastDate = dates.get(0);
  const isTodayCompleted = Boolean(lastDate && lastDate.status === habitStatus.end);

  const wrapperClass = classNames({
    [classes.wrapper]: true,
    [classes.lastWrapper]: isLast,
  });

  return (
    <div className={wrapperClass}>
      <div className={classes.icon}>
        <MaterialDesignIcon name={icon} />
        {isTodayCompleted && (
          <MaterialDesignIcon
            className={classes.checkMark}
            name="check-outline"
          />
        )}
      </div>
      <div className={classes.description}>
        <h4 className={classes.title}>{name}</h4>
        <span className={classes.subtitle}>
          {texts.today(isTodayCompleted)}
        </span>
        <span className={classes.subtitle}>
          {texts.chain(currentChain)}
        </span>
        <HabitItemMenu
          content={content}
        />
      </div>
    </div>
  );
};

export default HabitItem;
