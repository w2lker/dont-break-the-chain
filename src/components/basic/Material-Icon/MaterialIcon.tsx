import * as React from 'react';

import classNames from 'classnames';

export interface IMaterialDesignIconProps {
  name?: string;
  className?: string;
  style?: any;
}

const MaterialDesignIcon: React.FC<IMaterialDesignIconProps> = (props) => {
  const { name, className, style } = props;
  if (!name) {
    return null;
  }
  const iconClass = classNames('material-icon', 'mdi', `mdi-${name}`, className);
  return (
      <span
          className={iconClass}
          style={style}
      />
  );
};

export default MaterialDesignIcon;
