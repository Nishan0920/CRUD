import express from "express";
import ConnectDB from "./db.js";
import router from "./Route/CreateUser.js";
import cors from 'cors'


const app = express();
const port = 8000;

ConnectDB()
app.use(cors())
app.use(express.json())
app.use('/api',router)

app.get("/", (req, res) => {
  res.send("Hello ,World");
});


app.listen(8000, () => {
  console.log(`Server is running on ${port}`);
});

export {};
