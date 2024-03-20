const express = require("express");
const DBConnect = require("./DBConnect");
const cors = require("cors");
const rout = require("./routing");
const app = express();
app.use(express.json());
app.use(cors());
DBConnect();
app.post("/products/register", rout.productRegister);

app.listen(9876, () => {
    console.log("Server Started....");
});
