const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const data = require("./products.json");
app.use(cors());

app.use(express.static("public"));

app.get("/products", (req, resp) => {
  resp.json(data);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
