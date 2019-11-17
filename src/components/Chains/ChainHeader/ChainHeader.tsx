import * as React from 'react';

import MaterialDesignIcon from '../../basic/Material-Icon';
import chainHeaderStyles from './ChainHeader.styles';

import { colors } from '../../../contants/colors';
import { IHabit } from '../../../models/habit';

export interface IChainHeaderProps extends IHabit {
  classes: any;
}

const ChainHeader: React.FC<IChainHeaderProps> = (props) => {
  const { currentChain, longestChain, classes } = props;
  // Handling incorrect attributes (empty string etc)
  const icon = props.icon || 'ninja';
  const color = colors[props.color || 'blue'][500];
  const name = props.name || 'The habit';

  const areStatsProvided = currentChain && longestChain;
  // @ts-ignore
  const longestChainUpdated = areStatsProvided && (longestChain > currentChain) ? longestChain : currentChain;

  const renderStats = areStatsProvided ? (
    <span className={classes.stats}>
      {`${currentChain}/${longestChainUpdated}`}
    </span>
  ) : null;

  return (
    <div className={classes.wrapper}>
      <MaterialDesignIcon
          className={classes.icon}
        name={icon}
        style={{ color }}
      />
      <div className={classes.description}>
        <h5 className={classes.name}>
          {name}
        </h5>
        {renderStats}
      </div>
    </div>
  );
};

export default ChainHeader;
