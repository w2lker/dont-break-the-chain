import React from "react";

import MaterialDesignIcon from "../../../basic/Material-Icon";
import IconButton from "@material-ui/core/IconButton";

import {colors, colorsKeys} from "../../../../contants/colors";
import {habitStatus, habitStatusesType} from "../../../../models/habit";


export interface IChainItemIncompleteProps {
  status: habitStatusesType;
  color: colorsKeys;
  onAdd: () => void;
}

const ChainItemIncomplete: React.FC<IChainItemIncompleteProps> = (props) => {
  const {status, onAdd} = props;

  if (status !== habitStatus.incompleteToday) {
    return null;
  }

  const color = colors[props.color || 'blue'][500];

  return (
    <IconButton
        onClick={onAdd}
    >
        <MaterialDesignIcon
            name="plus-circle"
            style={{ color }}
        />
    </IconButton>
  );
};

export default ChainItemIncomplete;