// var assert = require('assert');
var expect = require('chai').expect;
var supertest = require('supertest-as-promised')(require('../server/app'));

describe('Express Routes', function() {
	describe('/api/net/nums URI', function() {
		it('PUT responds with "hello" ', function() {
			return supertest // supertest object lets us make & test HTTP req/res
				.put('/api/net/nums') // makes an HTTP request: GET '/users'
				.expect(200) // tests response status code
				.expect('Content-Type', /json/) // tests response header
				.expect(function(res) {
					expect(res.body).to.eql('hello'); // tests response body
				});
		});
	});
});
