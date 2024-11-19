const findTheOldest = function(people) {
  let currentYear = (new Date()).getFullYear();
    
    
  const logestYears = Math.max(...people.map((nextPerson) => {
        
      if (nextPerson.yearOfDeath === undefined) {
        return currentYear - nextPerson.yearOfBirth 
      } 
      if (nextPerson.yearOfDeath !== undefined) {
        return nextPerson.yearOfDeath - nextPerson.yearOfBirth
      }
  }));
    //console.log(logestYears);
    return people.find((person) => {
      if (person.yearOfDeath === undefined) {
        return currentYear - person.yearOfBirth === logestYears
      }
      if (person.yearOfDeath !== undefined) {
        return person.yearOfDeath - person.yearOfBirth === logestYears
      }
  });
    
    
};

// Do not edit below this line
module.exports = findTheOldest;
