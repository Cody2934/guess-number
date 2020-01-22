import compareFunction from '../compareFunction.js';
// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

//test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
  //  assert.equal(true, false);
//});



test('the number are identical', assert => {
    const userGuess = 7;
    const expected = 0;
    const result = compareFunction(userGuess, 7);
    assert.equal(result, expected);
});


test('the number is too low', assert => {
    const userGuess = 5;
    const expected = -1;
    const result = compareFunction(userGuess, 6);
    assert.equal(result, expected);
});


test('the number is too high', assert => {
    const userGuess = 11;
    const expected = 1;
    const result = compareFunction(userGuess, 10);
    assert.equal(result, expected);
});
