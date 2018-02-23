// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { handler } = require('./handler');

describe('handler', () => {
  test('the handler function should respond', () => {
    let err;
    let response;

    handler({}, {}, (_err, _response) => {
      err = _err;
      response = _response;
    });

    expect(err).toBeNull();
    expect(response).toBeDefined();
  });

  test('the response should be successfull', () => {
    handler({}, {}, (err, response) => {
      expect(response.statusCode).toEqual(200);
    });
  });

  test('the response should contain a name key', () => {
    jest.resetModules();
    const { handler } = require('./handler');
    const uniqueNameGenerator = require('unique-names-generator');
    const spy = jest.spyOn(uniqueNameGenerator, 'generate');

    jest.mock('unique-names-generator',
    () => ({
        generate: jest.fn().mockImplementation(() => 'mocked-name'),
      }));

    handler({}, {}, (err, response) => {
      expect(response).toMatchSnapshot();
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
