// 정적 HTML, 동적 HTML

/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()


/*************** router init **************/

// Middleware
app.use((req, res, next) => {
	res.send('주소 없어요')
})

// Static Router
app.use('/', express.static('./public'))

// GET Router
app.get('/', (req, res, next) => {
	res.send('index.html이 없어요')
})

// GET Router
app.get('/book', (req, res, next) => {
	res.send('/book')
})

// POST Router
app.post('/book', (req, res, next) => {
	res.send('POST/book')
})



/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })