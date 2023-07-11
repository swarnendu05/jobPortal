const express = require('express')
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views')






DB.connection.on('open', () => {

    app.listen(3000, () => {
        console.log("Server up at 3000");
    })
})