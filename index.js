module.exports = function(doctype) {
    return function(tree) {
        return [].concat(doctype, tree);
    };
};
