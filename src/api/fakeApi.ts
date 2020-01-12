import moment from 'moment';

import habits from './fakeData/habits';
import profile from './fakeData/profile';

const fakeFetch = (data: any) => {
  return new Promise((resolve, reject) => {
    if (data) {
      setTimeout(() => {
        resolve({
          data,
        });
      }, 200);
    } else {
      reject({
        error: 'Some error message',
      });
    }
  });
};

class Api {
  getProfile() {
    return fakeFetch(profile);
  }

  getHabits() {
    return fakeFetch(habits);
  }

  setHabitCheckStatus(id: number, desiredStatus: boolean) {
    const currentHabit = habits.find((habit) => habit.id === id);
    if (!currentHabit) return fakeFetch(null);

  }

  logout() {
    return fakeFetch({ status: 200 });
  }
}

export default new Api();
