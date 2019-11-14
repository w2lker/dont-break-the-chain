import * as React from 'react';
import classNames from 'classnames';

export interface MaterialDesignIconProps {
  name?: string,
  className?: string,
  style?: any
}

function MaterialDesignIcon( props:MaterialDesignIconProps ) {
  const {name, className, style} = props;
  if (!name) {
    return null;
  }
  const iconClass = classNames('material-icon', 'mdi', 'mdi-'+name, className);
  return (
    <span
      className={iconClass}
      style={style}
    />
  )
}

export default MaterialDesignIcon;