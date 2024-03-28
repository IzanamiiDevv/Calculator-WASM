//Importing Modules
const express = require('express');
const cors = require('cors');
const path = require('path');


//Initalization
const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'public');


//Middle Ware
app.use(cors({
    origin:"*"
}));


//Server Root
app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});


//Lunch the Server
app.listen(PORT,()=>{
    console.log(`server was running at: http://localhost:${PORT}`);
});