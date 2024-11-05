const reverseString = function(words) {
    let reversedCharacters = "";
    for (let i = words.length-1; i >= 0; i--) {
        reversedCharacters += words[i];
    }
    return reversedCharacters;
};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
