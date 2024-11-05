const convertToCelsius = function(tempInFahrenheit) {
  if (tempInFahrenheit === 32){
    return 0;
  }else {
    return parseFloat(((tempInFahrenheit - 32) * 5/9).toFixed(1));
  }
};

const convertToFahrenheit = function(tempInCelsius) {
  if (tempInCelsius === 0) {
    return 32;
  }else {
    return parseFloat(((tempInCelsius * 9/5) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
