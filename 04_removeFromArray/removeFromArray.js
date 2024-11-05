const removeFromArray = function(array, ...args) {
    let itemsToRemove =[...args];
    let filteredArray = array.filter((item)=>{
        
            return !itemsToRemove.includes(item);

    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
