import API from '../API';

const mockedAPI = jest.fn().mockImplementation(() =>
  Promise.resolve({
    data: {},
  }),
);

API.get = mockedAPI;
API.post = mockedAPI;

module.exports = {
  __esModule: true,
  default: API,
  get: mockedAPI,
  post: mockedAPI,
};
