import * as React from 'react';

import ChainItemIncomplete from './ChainItemIncomplete';
import ChainItemScore from './ChainItemScore';
import ChainItemStar from './ChainItemStar';
import ChainItemWrapper from './ChainItemWrapper';

import { colorsKeys } from '../../../contants/colors';
import { habitStatusesType } from '../../../models/habit';

export interface IChainItemProps {
  status: habitStatusesType;
  color: colorsKeys;
  value: number;
  onAdd: () => any;
}
const ChainItem: React.FC<IChainItemProps> = (props) => {
  const { status, color, value, onAdd } = props;
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
};

export default ChainItem;
