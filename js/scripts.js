  var beerCount = function(decrease, bottles) {
    var integers = [];
      for (var i = 1; i <= bottles; i++) {
        if (i - decrease1 === 0) {
          integers.push(i);
        }
      }
return integers;
}

$(document).ready(function() {
  $("form#count-by").submit(function(event) {
    var decrease1 = parseInt($("input#decrease1").val());
    var bottles = parseInt($("input#bottles").val());
    var result = beerCount(decrease1, bottles);

    $(".output").text(result);
    $("result").show();
    event.preventDefault();

});
});
