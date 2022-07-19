const { upperCaseFirstLetter } = require('./strings');

describe('capitalize first letter of string', () => {

    test('should return an empty string if value is blank', () => {
        expect(upperCaseFirstLetter('')).toEqual('');
    });

    test('should return Hello for hello', () => {
        expect(upperCaseFirstLetter('hello')).toEqual('Hello');
    });

});