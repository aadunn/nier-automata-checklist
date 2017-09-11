const express = require('express');
const logger = require('morgan');
const app = express();
const template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res, next) {
    try {
        var html = template({ title: 'Home' });
        res.send(html);
    } catch (e) {
        next(e);
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
})
