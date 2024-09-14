let express = require("express");

let app = express();

app.get("/" , function(req, res){
    res.sendFile(__dirname + "/index.html");
}
)


app.listen(3000, function(){
    console.log("server initiated");
})

app.get("/poke.css", function(req, res){
    res.sendFile(__dirname + "/"+ "poke.css");
})

app.get("/poke.js", function(req, res){
    res.sendFile(__dirname +"/"+ "poke.js");
} )

