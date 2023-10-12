const dotenv = require('dotenv').config()
const bodyParser = require("body-parser");
const express = require('express')
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
authRouter = require("./routes/authRoute");
const app = express()

const PORT = process.env.PORT || 4000
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/user", authRouter)

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})