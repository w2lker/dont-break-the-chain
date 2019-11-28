import React from 'react';

import { shallow } from 'enzyme';
import ProfileStats, { IProfileStatsProps } from './ProfileStats';
import profileStatsStyles from './ProfileStats.styles';

const classes = {
  wrapper: 'profile-stats-wrapper',
  statWrapper: 'profile-stats-stat-wrapper',
  statValue: 'profile-stats-stat-value',
  statSubtitle: 'profile-stats-stat-subtitle',
  statDescription: 'profile-stats-stat-description',
};

const classesKeys = Object.keys(classes);

describe('ProfileStats component', () => {

  const emptyProps: IProfileStatsProps = {
    classes,
  };

  const sampleProps: IProfileStatsProps = {
    classes,
    days: 33,
    total: 1453,
  };

  it('match snapshot', () => {
    const component = shallow(<ProfileStats {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render if no props passed', () => {
    const component = shallow(<ProfileStats {...emptyProps} />);
    expect(component).toEqual({});
  });

  describe('renders with okay props', () => {
    const component = shallow(<ProfileStats {...sampleProps} />);
    it('renders wrapper', () => {
      const wrapper = component.find(`.${classes.wrapper}`);
      expect(wrapper.length).toBe(1);
    });
    it('renders 2 scores', () => {
      const scoreWrappers = component.find(`.${classes.statWrapper}`);
      expect(scoreWrappers.length).toBe(2);
      const scoreValues = component.find(`.${classes.statWrapper} .${classes.statValue}`);
      expect(scoreValues.length).toBe(2);
    });
    it('renders total score', () => {
      const totalScore = component.find(`.${classes.statWrapper} .${classes.statValue}`).at(0);
      const totalScoreText = totalScore.text();
      // @ts-ignore
      expect(totalScoreText).toMatch(sampleProps.total.toString());
    });
    it('renders days amount', () => {
      const daysScore = component.find(`.${classes.statWrapper} .${classes.statValue}`).at(1);
      const daysScoreText = daysScore.text();
        // @ts-ignore
      expect(daysScoreText).toMatch(sampleProps.days.toString());
    });
  });

  it('renders with only total', () => {
    const props = {
      classes,
      total: 123,
    };
    const component = shallow(<ProfileStats {...props}/>);
    const stats = component.find(`.${classes.statWrapper}`);
    expect(stats.length).toBe(1);
    const statsValue = component.find(`.${classes.statValue}`);
    expect(stats.length).toBe(1);
    const statsText = statsValue.at(0).text();
    expect(statsText).toMatch(props.total.toString());
  });

  it('renders with only days', () => {
    const props = {
      classes,
      days: 13,
    };
    const component = shallow(<ProfileStats {...props}/>);
    const stats = component.find(`.${classes.statWrapper}`);
    expect(stats.length).toBe(1);
    const statsValue = component.find(`.${classes.statValue}`);
    expect(stats.length).toBe(1);
    const statsText = statsValue.at(0).text();
    expect(statsText).toMatch(props.days.toString());
  });
});

describe('ProfileStats styles', () => {
  it('contains principle classes', () => {
    expect(profileStatsStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(profileStatsStyles[keyValue]).toBeDefined();
    });
  });
});

describe('ProfileStats decorators', () => {
  test.todo('Test if all classes are passed to component');
  test.todo('Test if score and days are passed from connected store');
});
