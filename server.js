require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const express = require("express");
const categoryRoutes = require("./routes/category");
const itemRoutes = require("./routes/item");
const cors = require("cors");

dbConfig();
const app = express();
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://esybilling.netlify.app/'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/item", itemRoutes);
app.use("/api/category", categoryRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
