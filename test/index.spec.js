const {expect} = require('chai')
const {greeting} = require('../index')

describe('greeting', function() {
  it('should welcome', function() {
    expect(greeting()).to.match(/welcome.*/i)
  })
})
