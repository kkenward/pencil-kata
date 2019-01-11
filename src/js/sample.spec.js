import { add } from "./sample";

var expect = require('chai').expect;

describe('simple tests', function() {
  it('should pass', function() {
    expect(true).to.be.true;
  });
  
  it('should add', function() {
    expect(add(1, 2)).to.equal(3);
  });
});