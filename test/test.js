/* jshint mocha: true, maxlen: false */
var dt = require('..');
var posthtml = require('posthtml');
var expect = require('chai').expect;

var HTML = '<html><head><title>Test</title></head><body><div class="button"><div class="button__text">Text</div></div></body></html>',
    DOCTYPE = '<!DOCTYPE html>';

function test(input, output, options, done) {
    posthtml()
        .use(dt(options))
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
            { doctype: 'HTML 5' },
            done
        );
    });

    it('replace doctype', function(done) {
        var doc = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">';
        test(
            [DOCTYPE, HTML].join(''),
            [doc, HTML].join(''),
            { doctype: 'HTML 4.01 Strict' },
            done
        );
    });

    it('check tree options', function(done) {
        var doc = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">';
        test(
            '<html><head><link></head><body><img></body></html>',
            [doc, '<html><head><link /></head><body><img /></body></html>'].join(''),
            { doctype: 'HTML 4.01 Strict' },
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
