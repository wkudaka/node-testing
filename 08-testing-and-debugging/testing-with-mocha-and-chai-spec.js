/*
  to run all tests run:
  npm test
*/


var expect = require('chai').expect;
var tools = require('./lib/tools')
var nock = require('nock');

describe("Tools", function(){

  //34-testing-with-mocha-and-chai-spec
  describe("printname()", function(){
    it("should print the last name first",function() {
      var results = tools.printName({first: "First Name", last: "Last Name"});

      expect(results).to.equal("Last Name, First Name");
    });
  });

  //35-Async mocha testing
  // describe("loadWiki()", function(){
  //
  //   it("Load Abraham Lincoln wikipedia page....", function(done){
  //     //I have a slow connection :P
  //     this.timeout(5000);
  //
  //     tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){
  //       expect(html).to.be.ok;
  //       done();
  //     });
  //   });
  //
  // });

  //36 - Mocking a server with Nock
  describe("loadWiki()", function(){

    before(function(){
      //"Fake" a server response
      nock("https://en.wikipedia.org")
        .get("/wiki/Abraham_Lincoln")
        .reply(200, "Mock Abraham_Lincoln page");
    });

    it("Load Abraham Lincoln wikipedia page....", function(done){


      tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){
        expect(html).to.equal("Mock Abraham_Lincoln page");
        done();
      });
    });

  });



});

//37 - Injecting dependencies with rewire
var rewire = require('rewire');

var order = rewire('./lib/order');

describe("Order", function(){

  beforeEach(function(){
    this.testData = [
      {sku:'AAA', qty:10},
      {sku:'BBB', qty:0},
      {sku:'CCC', qty:3}
    ];

    order.__set__("inventoryData", this.testData);
  });

  describe("Ordering Items", function(){

    it("order an item when there are enough in stock",function(done) {

      order.orderItem("CCC", 3, function(){

        done();
      });

    });

  });

});

//38 - Advanced testing Sinon spies
//and
//39 - Advanced testing Sinon spies
var sinon = require('sinon');

describe("Order - with spy", function(){

  beforeEach(function(){
    this.testData = [
      {sku:'AAA', qty:10},
      {sku:'BBB', qty:0},
      {sku:'CCC', qty:3}
    ];

    this.console = {
      log: sinon.spy()
    };

    this.warehouse = {
      packageAndShip: sinon.stub().yields(1091203909)
    };

    order.__set__("inventoryData", this.testData);
    order.__set__("console", this.console );
    order.__set__("warehouse", this.warehouse );
  });

  describe("Ordering Items", function(){

    it("order an item when there are enough in stock",function(done) {
      var _this = this;


      order.orderItem("CCC", 3, function(){
        expect(_this.console.log.callCount).to.equal(2);
        done();
      });

    });

    it("Logs item not foun", function(){
      order.orderItem("ZZZ", 10);
      expect(this.console.log.calledWith("Item - ZZZ not found")).to.equal(true);
    });

  });

  describe("Warehouse interaction", function(){

    beforeEach(function(){
      this.callback = sinon.spy();
      order.orderItem("CCC", 2, this.callback);
    });

    it("receives a tracking number",function() {
      expect(this.callback.calledWith(1091203909)).to.equal(true);
    });

    it("calls packageAndShip with the correct sku and quantity",function() {
      expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
    });

  });

});


//40- Code coverage with istanbul
//install istanbul and execute:
//istanbul cover ./node_modules/.bin/_mocha **/*-spec.js
