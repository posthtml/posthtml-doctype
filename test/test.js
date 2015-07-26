var doctype = require('..');
var posthtml = require('posthtml');
var expect = require('chai').expect;

var HTML = '<div class="button"><div class="button__text">Text</div></div>',
    INPUTARR = [
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
        HTML
    ],
    OUTPUTARR = [
        '<!DOCTYPE html>',
        HTML
    ];

function test(input, output, done) {
    posthtml()
        .use(doctype('<!DOCTYPE html>'))
        .process(input)
        .then(function(result) {
            expect(output).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        });
}

describe('Simple text', function() {
    it('doctype changed', function(done) {
        test(INPUTARR.join(''), OUTPUTARR.join(''), done);
    });
});
