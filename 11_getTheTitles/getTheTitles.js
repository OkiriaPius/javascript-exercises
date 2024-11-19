const getTheTitles = function(books) {
    //use map because it returns a new array according to condition
    const foundTitles = books.map((book)=>{
        //condition
        return book.title;
    });
    //console.log(foundTitles);
    return foundTitles; 
};

// Do not edit below this line
module.exports = getTheTitles;
