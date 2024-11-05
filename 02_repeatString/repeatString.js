const number = Math.floor(Math.random() * 1000);
const repeatString = function(word, times) {
    let string = "";
    if (times < 0){
        return 'ERROR';
    }
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
};
repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin', number);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
