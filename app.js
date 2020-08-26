const express = require("express");
const app = express();
app.use(express.json());

num = 0;
msgs = [];

msgs.push({ id: ++num, msg: "Hello" });
msgs.push({ id: ++num, msg: "World" });


app.get("/messages", function (req, res) {
    res.status(200).send(msgs);
});

app.post("/messages", function (req, res) {
    if (req.body.msg) {
        message = { id: ++num, msg: req.body.msg };
        msgs.push(message);
        res.status(200).send(message);
    }
    else {
        res.status(400).send({ error: "The parameter is not correct" })
    }
});

app.put("/messages/:id", function (req, res) {
    try {
        message = msgs.find((elem) => elem.id == req.params.id);
        message.msg = req.body.msg;
        res.status(200).send(message);
    } catch (error) {
        res.status(400).send({ error: "Invalid id" })
    }
});

app.delete("/messages/:id", function (req, res) {
    try {
        message = msgs.find((elem) => elem.id == req.params.id);
        msgs.splice(msgs.indexOf(message), 1);
        res.status(200).send(message);
    } catch (error) {
        res.status(400).send({ error: "Invalid id" })
    }
});

app.listen(3000, () => console.log("Listening on port 3000"));
