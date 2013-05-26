/**
 * Module dependencies
 */
var should = require("should")
  , clock = require("..");

describe("clock", function(){
  it("should work", function(done) {
    var past;

    clock.on(function(time) {
      if(!past || past === time) return past = time;
      (time - past).should.eql(1);
      clock.stop();
      done();
    });

    clock.start();
  });
});
