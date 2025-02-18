const express = require('express')
const app = express();
app.use(express.urlencoded())


app.get('/', (req, res) => {
    res.send("This is the home route of the application.")
})

app.get('/download', (req, res) => {
    res.download('teenpatti.apk')
})

app.get('*', (req, res) => {
    res.send("<h2>404 - Not Found</h2>")
})

app.listen(3000, () => {
    console.log("SERVER STARTED!!");
})