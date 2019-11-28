import React from 'react';

import { mount, shallow } from 'enzyme';
import cases from 'jest-in-case';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ProfileStats, { IProfileStatsProps } from './ProfileStats';
import ProfileStatsDecorated from './ProfileStats.decorators';
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
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const storeState = {
    profile: {
      points: 1234,
      longestChain: 14,
    },
  };
  const store = mockStore(storeState);

  const component = mount(
    <Provider store={store}>
      <ProfileStatsDecorated/>
    </Provider>,
  );
  const props = component.find('ProfileStats').props();

  it('provides styled classes', () => {
    // @ts-ignore
    const assignedClasses = props.classes;
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });

  const casesTitle = 'Testing mapper from connected store to props';
  const casesTester = (opts: typeof casesData[0]) => {
    // @ts-ignore
    expect(props[opts.target]).toBeDefined();
    // @ts-ignore
    expect(props[opts.target]).toBe(storeState.profile[opts.source]);
  };

  const casesData = [
    { name: '"total" is passed', source: 'points', target: 'total' },
    { name: '"days" is passed', source: 'longestChain', target: 'days' },
  ];

  cases(casesTitle, casesTester, casesData);
});
