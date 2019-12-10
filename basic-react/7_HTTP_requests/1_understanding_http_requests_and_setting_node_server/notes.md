# Understand HTTP request in our react apps

In network tab -> localhost file we can see out html request that browserhas made to load the files.

The content can be seen in the response tab.

## headers

We can see the information about request like:

- status code 200
- that it was a GET request
- source of this request

## Representation State Transfer REST - Architecture style, that uses HTTP requests and responses to communicate with the server

## Creating node.js webserver with express

npm install express body-parser --save

server will be in src/server/server.js dir
We can run the server by going to /server dir and running:
node server

We can request the data from:
http://localhost:5000/api/records
