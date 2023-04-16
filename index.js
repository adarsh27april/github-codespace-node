import mongoose from "mongoose";
import express from "express";
const app = express();

app.get("/", (req, res) => {
   res.send("GET Request getting on /")
})

app.listen(5000, () => {
   console.log("Properly listening on PORT 5000");
})