// Use path to utilize public files (style.css). `app.use(express.static(path.join(__dirname, 'public')));`
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

const routes = require('./controllers');
// import sequelize connection

// Tell handlebars.js about the helpers file
const helpers = require('./utils/helpers');

// pass helpers to existing exphbs.create
const hbs = exphbs.create({
    helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// for public files
app.use(express.static(path.join(__dirname, 'public')));
// app.use statements END

// turn on routes
app.use(routes);


// sync sequelize models to the database, then turn on the server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})
