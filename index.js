import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {

    try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");

    res.render("../views/index.ejs", {
        secret: response.data.secret,
        user: response.data.username
    })
    } catch (error) {
        console.log(error.response.data)
    }
})

 app.listen(3000, (req, res) => {
    console.log("Server listening at 3000.")
 })