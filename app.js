var app = require('express')();
var search = require('./search');

// Search Route
app.get('/search/:search', function(req, res) {
    search.query(req.params.search, req.query.offset, function(results) {
        res.json(results);
    });
});

// Search history
app.get('/history', function(req, res) {
    res.json(search.recent);
});

// Homepage
app.get('/', function(req, res) {
    res.send('Image Search Abstraction');
});


app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});