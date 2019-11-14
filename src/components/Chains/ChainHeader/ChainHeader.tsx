import * as React from 'react';

import MaterialDesignIcon from "../../basic/Material-Icon";

import {IHabit} from "../../../models/habit";
import {colors} from "../../../contants/colors";

const ChainHeader: React.FC<IHabit> = (props) => {
  const {currentChain, longestChain} = props;
  // Handling incorrect attributes (empty string etc)
  const icon = props.icon || 'ninja';
  const color = colors[props.color || 'blue'][500];
  const name = props.name || 'The habit';

  const areStatsProvided = currentChain && longestChain;
  // @ts-ignore
  const longestChainUpdated = areStatsProvided && (longestChain > currentChain) ? longestChain : currentChain;

  const renderStats = areStatsProvided ? (
    <span className="stats">
      {`${currentChain}/${longestChainUpdated}`}
    </span>
  ) : null;

  return (
    <div className="habit-header-wrapper">
      <MaterialDesignIcon
        name={icon}
        style={{ color }}
      />
      <div className="description">
        <h5 className="name">
          {name}
        </h5>
        {renderStats}
      </div>
    </div>
  )
};

export default ChainHeader;
