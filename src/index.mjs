import express, { response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    {id: 1, username: "anson", displayName: "Anson"},
        {id: 1, username: "jack", displayName: "Jack"},
        {id: 1, username: "adam", displayName: "Adam"}
]

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

app.get("/", (request, response) => {
    response.status(201).send({msg: "Hello"});
});

app.get("/api/users", (request, response) => {
    response.send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    if (isNaN (parsedId)) 
        return response.status(400).send({msg: "Bad Request. Invalid ID. "});

    const findUsers = mockUsers.find((users) => users.id === parsedId);
    if (!findUsers) return response.sendStatus(404);
    return response.send(findUsers);
});

app.get("/api/products", (request, response) => {
    response.send([
        {id:123, name: "chicken breast", price: 12.99}
    ]);
});
// app.listen(PORT, () => {
//     console.log(`Running on Port ${PORT}`);
// });

//localhost:3000
//localhost:3000/users
//localhost:3000/products