const express = require("express");
const app = express();
app.use(express.json());

msgs = [
    { id: 1, msg: "Hello" },
    { id: 2, msg: "World" },
];

app.get("/messages", function (req, res) {
    res.status(200).send(msgs);
});

app.post("/messages", function (req, res) {
    // console.log(req.body.id);
    msgs.push({ id: req.body.id, msg: req.body.msg });
    res.status(200).send(req.body);
});

app.put("/messages/:id", function (req, res) {
    // console.log(req.params.id);
    message = msgs.find((elem) => elem === req.params.id);
    message.msg = req.body.msg;
    res.status(200).send(message);
});

app.listen(3000, () => console.log("Listening on port 3000"));
