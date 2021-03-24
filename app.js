// jshint esversion:8
const express=require('express');
const app=express();
const path=require('path');
let PORT=process.env.PORT||3000;
const router=require('./router/router.js');
// Static Middleware
app.set("views", path.join(__dirname, "views"));
app.set('view engine','pug');
app.use(express.static('public'));
// Router
app.use('/',router);

// Server listening
app.listen(PORT,()=>{
	console.log(`listening PORT http://localhost:${PORT} ...`);
});
// app.get('/',()=>{})