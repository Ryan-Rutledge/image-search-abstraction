var app = require('express')();
var search = require('./search');

// Recent search route
app.get('/history', function(req, res) {
    res.json(search.recent);
});

// Search Route
app.get('/:search', function(req, res) {
    search.query(req.params.search, req.query.offset, function(results) {
        res.json(results);
    });
});

// Homepage
app.get('/', function(req, res) {
    res.send('Image Search Abstraction');
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});