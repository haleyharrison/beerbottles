
//when 0 is entered
  describe('beerCount', function(){
    it("will return a 'no bottles left' message", function() {
      expect(beerCount(0)).to.equal("no more bottles of beer!");
    })
  });


//when 1 is entered
  describe('beerCount', function(){
    it("will return '1 bottle of beer on the wall, 1 bottle of beer!'", function() {
      expect(beerCount(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer!");
      })
    });

//when anything higher is entered
  describe('beerCount', function(){
    it("will return bottles of beer on the wall", function() {
      expect(beerCount(3)).to.include("3 bottles of beer on the wall");
        })
      });

//"not include" test
  describe('beerCount', function(){
    it("will return bottles of beer on the wall", function() {
      expect(beerCount(4)).to.not.include("5 bottles of beer on the wall");
        })
      });
