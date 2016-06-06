var http = require('http');

var searchPath = ['http://duckduckgo.com/i.js?q=', null, '&s=', null];
var recentSearches = [];

function search(query, offset, cb) {
    recordSearch(query);
    
    getResults(getURL(query, offset), function(results) {
        cb(getFormatted(results));
    });
}

function getURL(query, offset) {
    searchPath[1] = encodeURI(query);
    searchPath[3] = /^\d+$/.test(offset) ? offset:0;
    return searchPath.join('');
}

function getResults(url, cb) {
    http.get(url, function(response) {
        var body = [];
        response.on('data', function(d) { body.push(d); });
        response.on('end', function() {
            var data = JSON.parse(body.join(''));
            cb((data && data.results) || []);
        });
    });
}

function getFormatted(data) {
    return [].concat(data).map(function(image) {
        return {
            url: image.image,
            alt: image.title,
            src: image.url
        };
    });
}

function recordSearch(query) {
    recentSearches.unshift({
        term: decodeURI(query),
        when: String(new Date())
    });
    
    if (recentSearches.length > 10) {
        recentSearches.pop();
    }
}

module.exports = {
    query: search,
    recent: recentSearches
};