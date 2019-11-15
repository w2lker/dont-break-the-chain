import * as React from 'react';
import classNames from 'classnames';

import ChainItemWrapper from "./ChainItemWrapper";
import ChainItemScore from "./ChainItemScore";
import ChainItemStar from "./ChainItemStar";
import ChainItemIncomplete from "./ChainItemIncomplete";

import {colorsKeys} from "../../../contants/colors";
import {habitStatusesType} from "../../../models/habit";

export interface IChainItemProps {
  status: habitStatusesType,
  color: colorsKeys,
  value: number,
  onAdd: () => any
}
function ChainItem(props: IChainItemProps) {
  const {status, color, value, onAdd} = props;
  return (
    <ChainItemWrapper
      status={status}
      color={color}
    >
      <ChainItemScore
        status={status}
        color={color}
        value={value}
      />
      <ChainItemStar
        value={value}
        color={color}
      />
      <ChainItemIncomplete
        status={status}
        color={color}
        onAdd={onAdd}
      />
    </ChainItemWrapper>
  );
}

export default ChainItem;