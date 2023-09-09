const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it("should return an empty string when passed an empty string", function() { 
    const input = "";
    const output = "";
    assert.equal(nameInverter(input),output);
  });

  it("return a single name when passed a single name", function() {
    const input = "name";
    const output = "name";
    assert.equal(nameInverter(input), output);
  });

  it("return a single name when passed a single name with extra spaces", function() {
    const input = "name";
    const output = "name";
    assert.equal(nameInverter(input), output);
  });

  it("return a last-name, first-name when passed a first and last-name", function() {
    const input = "first last";
    const output = "last, first";
    assert.equal(nameInverter(input), output);
  });

  it("stretch:return a last-name, first-name when passed a first and last-name with extra spaces around the names", function() { // 5
    const input = "first last";
    const output = "last, first";
    assert.equal(nameInverter(input), output);
  });

  it("return an empty string when passed a single honorific", function() { // 6
    const input = "Dr. ";
    const output = "";
    assert.equal(nameInverter(input), output);
  });

  it("return honorific first-name when passed honorific first-name", function() { // 7
    const input = "Dr. first";
    const output = "Dr. first";
    assert.equal(nameInverter(input), output);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name", function() { // 8
    const input = "Dr. first-name last-name";
    const output = "Dr. last-name, first-name";
    assert.equal(nameInverter(input), output);
  });

  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() { // 9
    const input = " Dr. first-name last-name ";
    const output = "Dr. last-name, first-name";
    assert.equal(nameInverter(input), output);
  });

  it("throw an error when name is undefined", function() { // 10
    const input = undefined;
    const output = "Error";
    assert.equal(nameInverter(input), output);
  });

});