//Importing Modules
const express = require('express');
const cors = require('cors');
const path = require('path');


//Initalization
const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'public');

let wasmMemory = new WebAssembly.Memory({ initial: 256, maximum: 256 });
let wasmTable = new WebAssembly.Table({
    initial: 1,
    maximum: 1,
    element: 'anyfunc'
});


let asmLibraryArg = {
    __handle_over_flow: () => {},
    emscripten_resize_heap: () => {},
    __lock: () => {},
    __unlock: () => {},
    memory: wasmMemory,
    table: wasmTable
};


let info = {
    env: asmLibraryArg,
    wasi_snapshot_preview1: asmLibraryArg
};


async function instantiate() {
    let response = await fetch('http://localhost:5173/wasm/operator.wasm');
    let bytes = await response.arrayBuffer();
    let wasmObj = await WebAssembly.instantiate(bytes, info);
    return new Promise(res => res(wasmObj.instance.exports))
}

//Middle Ware
app.use(cors({ origin:"*" }));
app.use(express.json());


//Server Root
app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

//Addition

app.post('/add',(req,res)=>{
    instantiate().then(method => {
        let { a,b } = req.body.data;
        let result = method.add(a,b);
        res.send({ result:result });
    });
});

//Subtraction
app.post('/sub',(req,res)=>{
    instantiate().then(method => {
        let { a,b } = req.body.data;
        let result = method.subtract(a,b);
        res.send({ result:result });
    });
});

//Multiplication
app.post('/mul',(req,res)=>{
    instantiate().then(method => {
        let { a,b } = req.body.data;
        let result = method.multiply(a,b);
        res.send({ result:result });
    });
});

//Division
app.post('/div',(req,res)=>{
    instantiate().then(method => {
        let { a,b } = req.body.data;
        let result = method.devide(a,b);
        res.send({ result:result });
    });
});

//Lunch the Server
app.listen(PORT,()=>{
    console.log(`server was running at: http://localhost:${PORT}`);
    instantiate().then(method => {
        console.log(method.add(5,5));
    });
});