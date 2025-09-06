import express from 'express';
import axios from 'axios';


const app = express()
const port = 3000


//const API_key = '58490d178aa8641fbb7e64992f5770d8';
const API_URL = 'https://api.restful-api.dev/objects?id=3';


app.use(express.static("public"));


//app.get("/", (req, res) => {
//    res.render("index.ejs")
//});


app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);

//console.log(result.data[0].name);

    res.render("index.ejs", 
        { 
            product: result.data[0].name, 
        });
  } catch (error) {
    res.render("index.ejs", 
        { 
            content: JSON.stringify(error.response.data) 
        });
  }
});


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})







