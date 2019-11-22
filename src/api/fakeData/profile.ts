import { List } from 'immutable';
import moment from 'moment';
import { IDailyProgress, IProfile } from '../../models/profile';

function generateHistoricalView(): List<IDailyProgress> {
  let result = List();
  for (let i = 0; i < 30; i += 1) {
    const value = Math.round(Math.random() * 30);
    const date = moment().subtract(i, 'd').toISOString();
    result = result.push({ value, date });
  }
  return result;
}

const profile: IProfile = {
  id: 345,
  name: 'Sandra Adams',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  email: 'purchasenow@gmail.com',
  points: 1234,
  longestChain: 35,
  historicalView: generateHistoricalView(),
};

export default profile;
