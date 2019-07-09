// Copyright (c) 2018-2019 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { uniqueNamesGenerator } = require('unique-names-generator');

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      name: uniqueNamesGenerator(),
    }),
  };

  callback(null, response);
};
