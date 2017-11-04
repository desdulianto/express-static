const express = require('express');

const http = express();

http.set('view engine', 'ejs');
http.set('views', 'views');

http.use('/fonts', express.static('static/font-awesome-4.7.0/fonts'));
http.use('/static', express.static('static'));

http.get('/', (req, res) => {
    res.render('index', {message: 'Hello World'});
});

http.listen(3000, () => {
    console.log('listening on 3000...');
});
