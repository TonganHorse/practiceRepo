const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))




port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`app listening on ${port}`)
})




