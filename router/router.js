// jshint esversion:8
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
	res.render('index',{title:"HOME",sty:'index.css'});
});
router.get('/about',(req,res)=>{
	res.render('about',{title:"ABOUT",sty:'about.css'});
});
router.get('/blog',(req,res)=>{
	res.render('blog',{title:"BLOG",sty:'blog.css'});
});

module.exports=router;
