var doctype = require('..');
var posthtml = require('posthtml');
var expect = require('chai').expect;

var HTML = '<html><head><title>Test</title></head><body><div class="button"><div class="button__text">Text</div></div></body></html>',
    DOCTYPE = '<!DOCTYPE html>';

function test(input, output, doctype, done) {
    posthtml()
        .use(doctype(doctype))
        .process(input)
        .then(function(result) {
            expect(output).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        });
}

describe('Simple test', function() {
    it('paste doctype', function(done) {
        test(
            HTML,
            [DOCTYPE, HTML].join(''),
            DOCTYPE,
            done
        );
    });

    it('null doctype', function(done) {
        test(
            HTML,
            [HTML].join(''),
            null,
            done
        );
    });
});
