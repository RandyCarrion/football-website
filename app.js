const express = require("express")//express is a library
const app = express();
app.use(express.static('./', {// links to index file i have within folder
    index: 'index2.html'
}));
app.listen(3003, function() {
    console.log(`Local host is listening at port 3003`)

})