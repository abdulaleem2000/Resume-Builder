const express = require("express");
const dotenv = require("dotenv");
const aiRoute = require("./openai");

dotenv.config();
const app = express();

app.use((req, res, next) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
});
//routes
app.use(express.json());

app.use("/api/ai",aiRoute );

//listening to server
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running");
})