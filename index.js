require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passport = require("./config/ppConfig");
const flash = require("connect-flash");
const isLoggedIn = require("./middleware/isLoggedIn");
const amadeus = require("./api/amadeus");
const { sequelize } = require('./models');

// views (ejs and layouts) set up
app.set("view engine", "ejs");
app.use(ejsLayouts);

// body parser middelware
app.use(express.urlencoded({ extended: false }));

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// flash middleware (must go AFTER session middleware)
app.use(flash());

// custom middleware
app.use((req, res, next) => {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// controllers middleware
app.use("/auth", require("./controllers/auth.js"));
app.use('/favorites', isLoggedIn, require('./controllers/favorites'))
app.use('/comments', isLoggedIn, require('./controllers/comments'))
app.use('/destination', isLoggedIn, require('./controllers/destination'))
app.use('/notes', isLoggedIn, require('./controllers/notes'))

app.use( express.static( "public" ) );
// home route
app.get("/", async (req, res) => {
  const destinations = await sequelize.models.destinations.findAll({}).then(result => {
    return result.map(destination => ({
      id: destination.id,
      destination_name: destination.destination_name,
      photo_path: destination.photo_path,
    }));
  });
  res.render("home", { destinations });
});

app.get("/signIn", (req, res) => {
  res.render(signIn);
});
app.get("/logIn", (req, res) => {
  res.render(LogIn);
});

app.get("/notes", (req, res) => {
  res.render(notes);
});

app.post("/notes", (req, res) => {
  res.render(notes);
});

app.post("/signIn", (req, res) => {
  res.render(signIn);
});

app.post("/signIn", (req, res) => {
  res.render(signIn);
});

app.post("/logOut", (req, res) => {
  res.render(logOut);
});

app.put("/favorites", (req, res) => {
  res.render(favorites);
});

app.put("/users", (req, res) => {
  res.render(users);
});

app.put("/home", (req, res) => {
  // console.log(sequelize);
  res.render(home);
});

app.get('/amadeus', async (req, res) => {
  // const destination = await sequelize.models.destinations.findByPk(1);

  const hotels = await amadeus.getHotels('SYD');
  console.log(hotels);
  res.json(hotels);
});

// profile route
app.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile");
});

app.listen(process.env.PORT, () => {
  console.log(`you are listening to the sounds of ${process.env.PORT}`);
});
