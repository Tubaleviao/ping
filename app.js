const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', __dirname)

app.get('/', (req, res) => res.render('index') )

app.listen(3000, () => console.log("listening on port 3000"))

