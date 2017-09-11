const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
})
