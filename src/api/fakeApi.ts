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
  logout() {
    return fakeFetch({ status: 200 });
  }
}

export default new Api();
