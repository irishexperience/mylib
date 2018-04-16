const {expect} = require('chai')
const {greeting} = require('../index')

describe('greeting', function() {
  it('should say hello', function() {
    expect(greeting()).to.match(/hello.*/i)
  })
})
