const express = require('express')
const app = express();
app.use(express.urlencoded())

app.get('/download', (req, res) => {
    res.download('teenpatti.apk')
})

app.listen(8000, () => {
    console.log("SERVER STARTED!!");
})