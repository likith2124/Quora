const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const path=require("path");
const {v4:uuidv4}=require('uuid');
const methodOverride=require("method-override");

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username : "Elon musk",
        content : "What a lovely Day!!",
        id : uuidv4()
    },
    {
        username : "Mark Zuckerberg",
        content : "New update to Instagram has been rolled out. Check it!!",
        id : uuidv4()
    }
];

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => p.id===id);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> p.id===id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> p.id===id);
    post.content=newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> p.id!==id);
    res.redirect("/posts");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({username,content,id});
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`Listening on port:${port}`);
});