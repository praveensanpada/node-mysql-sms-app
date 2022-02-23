const express = require("express");
const app = express()
var cors = require("cors")
var bodyParser = require("body-parser")

const PORT = process.env.PORT || 8089;
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.use(express.json())
app.use(urlencodedParser)

const appRoutes = require('./app/routes/appRoutes.js')

app.get("/", (req, res) => {
  res.json({ message: "Welcome to praveen application." });
});

app.use('/api/v1', appRoutes);

app.get('*',(req,res)=>{
	res.send("404! Page Not Found....");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
