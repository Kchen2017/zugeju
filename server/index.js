const path = require('path')
const express = require('express')
const app = express()

app.get('/api/home', (req, res, next) => {
	res.json({
		data: 'hello，I am server!'
	})
})

app.listen(3000);
console.log('success listen at port:3000......');