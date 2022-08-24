const express = require('express');

const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ['Complete Node Byte', "play Cricket"];

app.get("/todos", (req, res) => {
    res.status(200).json(toDoList)
});

app.post("/todos", (req, res) => {
    let newToDo = req.body.item;
    toDoList.push(newToDo);
    res.status(201).send({
        message: "Task added sussfully"
    });
});

app.delete("/todos", (req, res) => {
    const itemToDelete = req.body.item;
    toDoList.find((Element, index) => {
        if (Element === itemToDelete) {
            toDoList.splice(index, 1);
        };
    });

    res.status(200).send({
        mmessage: `Deleted item ${req.body.item}`,
    });
});

app.all("/todos", (req, res) => {
    res.status(501).send({
        message: "Not Exist"
    });
});

app.all("*", (req, res) => {
    res.status(404).send({
        message: "Not Found"
    })
})

app.listen(port, () => {
    console.log(`Node js server started on port ${port}`)
})

