const {sum, getPosts} = require('./helpers.js')
// const fs = require('fs')
const express = require('express')
const app = express();
const morgan = require('morgan')

// app.listen(3000)
// const http = require("http")

// // create server
// const server = http.createServer((req, res) => {
// 	res.end('hello world from node js hello hello')
// });

// // listen server
// server.listen(3000)

// const result = sum(4,5);
// console.log(result)
// // single threaded non-blocking async programming
// const filename = './target.txt';
// // fs.watch(filename, () => console.log('changed'))
// fs.readFile(filename, (err, data) => {
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(data.toString())
// })
// // single threaded blocking sync programming
// const filename = './target.txt';
// // fs.watch(filename, () => console.log('changed'))
// const data = fs.readFileSync(filename)
// console.log(data.toString())

// console.log('reading lines..')

// middleware

const myOwnMiddleware = (req, res, next) => {
	console.log('middleware applied !')

	next(); // to stop stucking in processing and move on next process
}

app.use(morgan("dev"))
app.use(myOwnMiddleware)

app.get('/', getPosts);
// app.get('/', myOwnMiddleware, getPosts); // middleware used to authenticate 

const port = 4040;
app.listen(port, () => {
	console.log(`listening port: ${port}`)
})