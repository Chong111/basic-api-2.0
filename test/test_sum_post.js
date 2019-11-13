
let express = require("express");
let server = require('M:/basic-api-2.0-master/src/server');
var should = require("should");

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let numbers = {"numbers": [1, 2, -3]};
let expectedSum = 6;

let numbers1a = {"numbers": [1.1, 2.2, -3.3]};
let numbers1b = {"numbers": [-1.1, -2.2, 3.3]};
let expectedSum1 = 6.6;

let assert = require('assert');


describe("sum post test", function() {

	it("should return 200 status and sum 6", function(done) {
		chai.request("http://localhost:8085")	
		.post('/api/sum')
		.send(numbers)
		.end(function(err, res) {
			res.status.should.equal(200);
			res.body.sum.should.equal(expectedSum);
			if (err) {
				return done(err);
			}
			console.log('res.status: ' + res.status);  
			console.log('res.body.sum: ' + res.body.sum); 

			done();
		});
	});

	it("should take sum of absolute values, Case 1", function(done) {

		chai.request("http://localhost:8085")	//This works
		.post('/api/sum')
		.send(numbers1a)
		.end(function(err, res) {
			res.status.should.equal(200);
			res.body.sum.should.equal(expectedSum1);
			currentSum1a = res.body.sum;
			currentSum1a.should.equal(expectedSum1);
			if (err) {
				return done(err);
			}
			console.log('res.status: ' + res.status);  
			console.log('res.body.sum 1a: ' + res.body.sum); 

			done();
		});

	});

	it("should take sum of absolute values, Case 2", function(done) {

		chai.request("http://localhost:8085")	//This works
		.post('/api/sum')
		.send(numbers1b)
		.end(function(err, res) {
			res.status.should.equal(200);
			res.body.sum.should.equal(expectedSum1);
			currentSum1b = res.body.sum;
			currentSum1b.should.equal(expectedSum1);
			if (err) {
				return done(err);
			}
			console.log('res.status: ' + res.status);  
			console.log('res.body.sum 1b: ' + res.body.sum); 

			done();
		});
	});

	it("should take sum of absolute values, Case 3", function(done) {
		range = 1000;
		size = 100
		numbers3 = generateNumbers(range, size);
		console.log(numbers3);
		chai.request("http://localhost:8085")	//This works
		.post('/api/sum')
		.send({"numbers": numbers3})
		.end(function(err, res) {
			res.status.should.equal(200);
			res.body.sum.should.equal(getAbsSum(numbers3));
			currentSum3 = res.body.sum;
			currentSum3.should.equal(getAbsSum(numbers3));
			if (err) {
				return done(err);
			}
			console.log('res.status: ' + res.status);  
			console.log('res.body.sum 3: ' + res.body.sum); 

			done();
		});
	});

});

function generateNumbers(range, size) {
	var numbers = [];
	for (var i = 0; i < size; i++) {
		let sign = Math.random();
		number = range * Math.random();
		if (sign >= 0.5) {
			number = (-1) * number;
		}
		numbers[i] = number;
	}
	
	return numbers;
}


function getAbsSum(nums) {
	sum = 0.;
	for (i in nums ) {
		sum += Math.abs(nums[i]);
	}
	
	return sum;
}