import React from "react";
import classNames from 'classnames';

import {colors, colorsKeys} from "../../../../contants/colors";
import {habitStatus} from "../../../../models/habit";

export interface IChainItemWrapper {
  status: number,
  color: colorsKeys,
}

const ChainItemWrapper: React.FC<IChainItemWrapper> = (props) => {
  const {status} = props;
  const isHabitIncompleteToday = status === habitStatus.incompleteToday;

  const wrapperClass = classNames({
    'habit-chain-wrapper': true,
    'incomplete': status === habitStatus.incomplete,
    'complete' : status === habitStatus.complete,
    'paused': status === habitStatus.paused,
    'start': status === habitStatus.start,
    'end': status === habitStatus.end,
    'incomplete-today': isHabitIncompleteToday
  });

  const color = colors[props.color || 'blue'][100];

  const wrapperStyle = {
    backgroundColor: !isHabitIncompleteToday ? color : null
  };

  return (
    <div
      className={wrapperClass}
      style={wrapperStyle}
    >
      {isHabitIncompleteToday && (
        <React.Fragment>
          <div
            className='custom-background'
            style={{backgroundColor: color}}
          />
          <span className='triangleLeft'/>
          <span className='triangleRight'/>
        </React.Fragment>
      )}
      {props.children}
    </div>
  )
};

ChainItemWrapper.defaultProps = {
  status: habitStatus.incomplete,
};

export default ChainItemWrapper;