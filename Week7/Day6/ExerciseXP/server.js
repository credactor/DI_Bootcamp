const Parser = require('rss-parser');
const parser = new Parser();
const url = 'https://thefactfile.org/feed/';
const express = require("express");
const app = express();
let items = [];
app.set("view engine", "ejs");
const PORT = 3000;
const urlencodedParser = express.urlencoded({extended: false});
app.listen(PORT, () => {console.log(`Listening on ${PORT}`);});
app.use(express.json());
app.use("/public", express.static("public"));
app.get("/", renderFeed);
app.get("/search", searchFeed);
app.post("/search", urlencodedParser, searchByForm);
app.post("/search/title", searchByTitle);
app.post("/search/category", searchByCategory);
populateItems();

async function populateItems () {
    const feed = await parser.parseURL(url);
    items = feed.items;
}

function searchByForm (req, res) {
    const title = req.body.title;
    const category = req.body.category;
    if (title == "" && category == "") {
        res.render("..\\public\\pages\\search.ejs", { items: []});
    } else if (title !== "" && category == "") {
        res.render("..\\public\\pages\\search.ejs", { items: getPostsByTitle(title) });
    } else if (title == "" && category !== "") {
        res.render("..\\public\\pages\\search.ejs", { items: getPostsByCategory(category) });
    } else {
        res.render("..\\public\\pages\\search.ejs", { items: getPostsByCategory(category)
            .filter((item) => item.title.toLowerCase().includes(title.toLowerCase())) });
    }
}

function renderFeed(req, res) {
    res.render("..\\public\\pages\\index.ejs", { items });
}

function searchFeed(req, res) {
    res.render("..\\public\\pages\\search.ejs", { items: []});
}

function searchByTitle(req, res) {
    const title = req.body.title;
    res.render("..\\public\\pages\\search.ejs", { items: getPostsByTitle(title) });
}

function getPostsByTitle(title) {
    return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByCategory(req, res) {
    const category = req.body.category;
    res.render("..\\public\\pages\\search.ejs", { items: getPostsByCategory(category) });
}

function getPostsByCategory(category) {
    return items.filter((item) => {
        const lowerCaseCat = item.categories.map ((elem) => elem.toLowerCase());
        return lowerCaseCat.some((elem) => elem.includes(category.toLowerCase()));
    });
    // return items.filter((item) => {
    //     item.categories.some((elem) => elem.toLowerCase().includes(category.toLowerCase()));
    // });
}