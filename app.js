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
    message = { id: ++num, msg: req.body.msg };
    msgs.push(message);
    res.status(200).send(message);
});

app.put("/messages/:id", function (req, res) {
    message = msgs.find((elem) => elem.id == req.params.id);
    message.msg = req.body.msg;
    res.status(200).send(message);
});

app.delete("/messages/:id", function (req, res) {
    message = msgs.find((elem) => elem.id == req.params.id);
    msgs.splice(msgs.indexOf(message), 1);
    res.status(200).send(message);
});

app.listen(3000, () => console.log("Listening on port 3000"));
