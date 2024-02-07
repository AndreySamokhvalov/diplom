const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
// ставим на прослушивание 3000 порт
app.set('port', 3000);


mongoose.connect('mongodb://127.0.0.1/pathList', { 
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(db => console.log('[OK] requestsDB is connected'))
    .catch(err => console.error(err));

    // mongoose.connections.length; // 1, just the default connection
    // mongoose.connections[0] === mongoose.connection; // true
    
    // mongoose.createConnection('mongodb://127.0.0.1/pathsdb', { 
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true })
        
    // mongoose.connections.length;




app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/api/records', require('./routes/records'));
// новая регистрация
app.use('/api/records/pathList', require('./routes/records'));

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});   


