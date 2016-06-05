var app = require('express')();
var search = require('./search');

// Search Route
app.get('/:search', function(req, res) {
    search.query(req.params.search, req.query.offset, function(results) {
        res.json(results);
    });
});

// Homepage shows search history
app.get('/', function(req, res) {
    res.json(search.recent);
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});