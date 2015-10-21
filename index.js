import express from 'express';
import ect from 'ect';

var app = express();
var ectRenderer = ect({
    watch: true,
    root: __dirname + '/views',
    ext : '.ect'
});
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
}.bind(this));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});

