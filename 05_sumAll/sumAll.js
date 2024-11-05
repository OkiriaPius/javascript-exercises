const sumAll = function(beginingNum, endingNum) {
    let answer = 0;
    
    if (Math.sign(endingNum) == -1 || Math.sign(beginingNum) == -1){
        return "ERROR"
    };
    if (!Number.isInteger(endingNum) || !Number.isInteger(beginingNum)){
        return "ERROR"
    };
    if (beginingNum < endingNum) {
        
        for (let index = beginingNum; index <= endingNum; index++) {
            answer += index;
            
        }
        
    

    };
    if (endingNum < beginingNum){
        for (let index = endingNum; index <= beginingNum; index++) {
            answer += index;
            
        };
        
    
    };
    
return answer;
};
// Do not edit below this line
module.exports = sumAll;
