const fibonacci = function(number) {
    //so as to use only number even if was string.
    number = Number(number);

    let numerals = [0,1];
    let answer = 1;
    //for checking certain conditions
    if (number === 0) {
        return 0;
    }else if (number < 0) {
        return "OOPS";
    }else {
        //for enabling add the previous then pushing them so that they are 
        //used for the next count if is greater than the previous.    
    for (let index = 0; index < number-1; index++) {
        answer += numerals[index];
        numerals.push(answer);
        //console.log(answer);
    }
    return answer; 
    }    
};

// Do not edit below this line
module.exports = fibonacci;
