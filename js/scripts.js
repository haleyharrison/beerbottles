  var beerCount = function(bottlesNumber) {
  //var integers = [];
  //for (var i = 1; i <= bottles; i-) {


     if (bottlesNumber === 0) {
       return "no more bottles of beer!";
     } else if (bottlesNumber === 1) {
       return "1 bottle of beer on the wall, 1 bottle of beer!";
     } else if (bottlesNumber === 2) {
       return "2 bottles of beer on the wall, 2 bottles of beer!";
     } else {
       return bottlesNumber + " bottles of beer on the wall, " + bottlesNumber +
       " bottles of beer, take one down and pass it around, " +
       (bottlesNumber - 1) + " bottles of beer on the wall! "
       + beerCount(bottlesNumber - 1);
   }

      }


$(document).ready(function() {
  $("form#beerBottles").submit(function(event) {
    var bottlesNumber = parseInt($("input#bottlesNumber").val());
    var result = beerCount(bottlesNumber);

    $(".output").text(result);
    $("#result").show();
    event.preventDefault();

});
});
