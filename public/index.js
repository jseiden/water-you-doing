'use strict';

var promise = new Promise(function (resolve) {
  var value = 'success';
  resolve(value);
});

promise.then(function (response) {
  console.log(response);
  return 'another success';
}).then(function (response) {
  console.log(response);
});