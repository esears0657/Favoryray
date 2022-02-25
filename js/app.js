
var addWords = (array) => {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i] + ' is one of my favorite things.' );
    }
}//for loop that diplays each thing and the text after, does it until it reaches the array length
 
var favoriteThings = ["Pizza","Computer","Phone","Xbox","Donuts"];
addWords(favoriteThings);
//returns