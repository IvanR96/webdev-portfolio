import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));

/*let name ={
    home: "Home:-Ivan Rios",
    about: "About Me:-Web Developer",
    contact: "Contact:-(714)585-4951"
}*/


app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});

app.get("/portfolio", (req,res)=>{
    const projects = [
        {title: 'Project 1', description: 'Description of project 1', link: '#', image: '/images/project1.jpg'},
        {title: 'Project 2', description: 'Description of project 2', link: '#', image: '/images/project2.jpg'}
    ];
    res.render("portfolio.ejs", { projects });
});

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})