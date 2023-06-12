const express = require("express");

const app = express();

const port = 5000;

const userRoutes = require("./routes/userRoutes");
const comercioRoutes = require("./routes/comercioRoutes");

app.use(express.json());

app.use('/users', userRoutes);
app.use('/comercios', comercioRoutes);

app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)})