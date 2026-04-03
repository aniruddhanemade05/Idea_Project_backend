const express = require('express')
const app = express() 
/**
 * stiching root here
 */
require("./routes/ideapp.routs")(app)
app.listen(8000,()=>{
    console.log("server got started")
})