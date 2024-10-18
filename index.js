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
        {title: 'Rapid Movers', description: 'This website is for a moving company called Rapid Movers', link: 'https://ivanr96.github.io/bootstrap-components/', image: '/images/rapid-movers.jpeg'},
        {title: 'Dev Labs', description: 'Web Development agency startup', link: 'https://ivanr96.github.io/webdev-agency/', image: '/images/web-agency.jpeg'}
    ];
    res.render("portfolio.ejs", { projects });
});

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})