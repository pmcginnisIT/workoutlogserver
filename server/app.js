require('dotenv').config();

let express = require('express');
let app = express();


let test = require('./controllers/testcontroller')
let user = require('./controllers/usercontroller')


const sequelize = require('./db');
sequelize.sync();
// sequelize.sync({ force: true }); //this will reset your whole table use with caution.
app.use(express.json())


app.use(require('./middleware/headers'));


app.use('/user', user);


app.use(require('./middleware/validate-session'));
app.use('/log', test);


app.listen(process.env.PORT, () => console.log(`App is listening on port 3000`));
