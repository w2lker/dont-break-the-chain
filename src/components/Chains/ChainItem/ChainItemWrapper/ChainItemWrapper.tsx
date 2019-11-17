import React from 'react';

import classNames from 'classnames';

import { colors, colorsKeys } from '../../../../contants/colors';
import { habitStatus, habitStatusesType } from '../../../../models/habit';

export interface IChainItemWrapper {
  status: habitStatusesType;
  color: colorsKeys;
  classes?: any;
}

const ChainItemWrapper: React.FC<IChainItemWrapper> = (props) => {
  const { status, classes } = props;
  const isHabitIncompleteToday = status === habitStatus.incompleteToday;

  const wrapperClass = classNames({
    [classes.wrapper]: true,
    incomplete: status === habitStatus.incomplete,
    [classes.wrapperComplete]: status === habitStatus.complete,
    paused: status === habitStatus.paused,
    [classes.wrapperStart]: status === habitStatus.start,
    [classes.wrapperEnd]: status === habitStatus.end,
    [classes.wrapperIncompleteToday]: isHabitIncompleteToday,
  });

  const backgroundColor = colors[props.color || 'blue'][100];

  const wrapperStyle = {
    backgroundColor: !isHabitIncompleteToday ? backgroundColor : null,
  };

  return (
    <div
      className={wrapperClass}
      style={wrapperStyle}
    >
      {isHabitIncompleteToday && (
        <React.Fragment>
          <div
            className={classes.customBackground}
            style={{ backgroundColor }}
          />
          <span className={`${classes.triangleItem} ${classes.triangleLeft}`}/>
          <span className={`${classes.triangleItem} ${classes.triangleRight}`}/>
        </React.Fragment>
      )}
      {props.children}
    </div>
  );
};

export default ChainItemWrapper;
