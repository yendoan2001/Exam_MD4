import express from 'express';
import router from './src/routers/staff.router'
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const PORT = 3000;
import database from './src/configs/database';
const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static( 'public'));
app.use(fileUpload( {
    createParentPath: true,
}));
database.connect();
app.use('/',router);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})