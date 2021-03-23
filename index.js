const express = require(`express`);
require(`./controllers/connection`);
const app = express();
const urlencoded = express.urlencoded({ extended: true });
const User = require(`./models/user`);

app.use(express.static(`static`)).use(urlencoded);
app.set(`view engine`, `ejs`);

// profile routes
const profileRoutes = require(`./routes/profileRoutes`);
app.use(profileRoutes);

// login routes
const loginRoutes = require(`./routes/loginRoutes`);
app.use(loginRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use((req, res) => {
  res.status(404).send(`does not exist`);
});
