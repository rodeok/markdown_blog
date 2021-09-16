const express = require('express')
const app = express()

app.use(express.static('public'))

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const path = require("path")
app.set("views", path.join(__dirname, "blog"))
app.set("view engine", "ejs")

const matter = require('gray-matter')
// const { resourceLimits } = require('worker_threads')

app.get("/blog/:article", (req,res) =>{
    const file = matter.read(__dirname + '/blog/' + req.params.article + '.md')
    var md = require("markdown-it")()
    let content = md.render(content)

    res.render("index",{
        post: resourceLimits,
        title: file.data.title,
        description: file.data.description,
        image: file.data.image
    })
})

app.get("/blog", (req, res) => {
    const posts = fs.readdirSync(__dirname + '/blog').filter(file => file.endsWith('.md'));
    res.render("blog", {
      posts: posts
    });
  });

  app.listen(4040)