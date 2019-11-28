import React from 'react';
import defaultTexts from '../../../../contants/defaultTexts';

export interface IProfileStatsProps {
  total?: number;
  days?: number;
  classes?: any;
}

const ProfileStats: React.FC<IProfileStatsProps> = (props) => {
  const { total, days, classes } = props;
  if (!total && !days) {
    return null;
  }

  const texts = defaultTexts.profile.stats;

  return (
    <div className={classes.wrapper}>
      {total && (
        <div className={classes.statWrapper}>
          <h4 className={classes.statValue}>{total}</h4>
          <p className={classes.statDescription}>
            {texts.total.description}
          </p>
        </div>
      )}
      {days && (
        <div className={classes.statWrapper}>
          <h4 className={classes.statValue}>
            {days}&nbsp;
            <span className={classes.statSubtitle}>
              {texts.days.subtitle}
            </span>
          </h4>
          <p className={classes.statDescription}>
            {texts.days.description}
          </p>
        </div>
      )}
    </div>
  );
};

ProfileStats.defaultProps = {
  classes: {
    wrapper: '',
    statWrapper: '',
    statValue: '',
    statSubtitle: '',
    statDescription: '',
  },
};

export default ProfileStats;
