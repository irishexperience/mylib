var expect = require('chai').expect
var greeting = require('../index').greeting

describe('greeting', function() {
  it('should welcome', function() {
    expect(greeting()).to.match(/hello.*/i)
  })
})
