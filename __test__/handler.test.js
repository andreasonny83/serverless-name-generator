// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { handler } = require('../handler');

jest.mock('unique-names-generator', () => ({
  uniqueNamesGenerator: jest.fn().mockImplementation(() => 'mocked-name'),
}));

describe('handler', () => {
  test('the handler function should work', () => {
    let err;
    let response;

    handler({}, {}, (_err, _response) => {
      err = _err;
      response = _response;
    });

    expect(err).toBeNull();
    expect(response).toBeDefined();
  });

  test('the response should be successful', () => {
    handler({}, {}, (err, response) => {
      expect(response.statusCode).toEqual(200);
    });
  });

  test('the response should contain a `name` key', () => {
    const { handler } = require('../handler');

    handler({}, {}, (err, response) => {
      expect(response).toMatchSnapshot();
    });
  });
});
