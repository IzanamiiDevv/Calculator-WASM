const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'public');

app.use(cors({
    origin:"*"
}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(PORT,()=>{
    console.log(`server was running at: http://localhost:${PORT}`)
});