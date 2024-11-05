const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const ans = array.reduce((a, b) => {
    return Number(a + b);
  },0);
  
  return ans;
};

const multiply = function(arr) {
  const answer = arr.reduce((a, b)=>{
    return Number(a * b);
  },1);
  return answer;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if(n === 0) return 1;
  let answers = 1;
  for (let i = 1; i <= n; i++) {
    answers *= i;
    
  }
  return answers;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
