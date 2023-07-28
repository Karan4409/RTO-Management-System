const http = require("http");
const express = require("express");
const session = require("express-session");
const store = new session.MemoryStore();
const customerRoute = require("./routes/cust");
const snippetsRoute = require("./routes/snippets");
const dlRoute = require("./routes/dl");
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.use(
    session({
        secret: "some name",
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
        saveUninitialized: false,
        resave: false,
    })
);

app.use("/customer", customerRoute);
app.use("/snippets", snippetsRoute);
app.use("/dl", dlRoute);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/", (req, res) => {
    res.render(__dirname + "index.html");
    res.send("Success!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
