const express = require('express');
const app = express();

// nodejs express documentation:
//    https://expressjs.com/en/4x/api.html

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title> website </title>
            </head>
            <body>
                <h1> working </h1>
            </body>
        </html>
    `);
});

app.get("/cars", (req, res) => {
    res.send(`
    <html>
    <head>
        <title> cars website </title>
    </head>
    <body>
        <h1> cars running </h1>
    </body>
</html>
    `);
});

app.get("/trucks", (req,res) => {
    res.send(`
        <html>
        <head>
            <title> trucks website </title>
        </head>
        <body>
            <h1> trucks truckin </h1>
        </body>
    </html>
    `);
});

