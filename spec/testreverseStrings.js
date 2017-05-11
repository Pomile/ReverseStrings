

const myapp = require("../apps/reverseStrings.js");
describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myapp.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myapp.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myapp.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myapp.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myapp.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myapp.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myapp.reverseString('misc')).toEqual('csim');
    });

  });

});