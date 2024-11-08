const palindromes = function (string) {
    let answers = string.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let answer = answers.split('').reverse().join('');
    if (answer === answers) {
        return true
    }else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
