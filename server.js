require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const express = require("express");
const categoryRoutes = require("./routes/category");
const itemRoutes = require("./routes/item");
const cors = require("cors");

// Initialize database connection
dbConfig();

const app = express();

// Allowed origins for CORS
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://esybilling.netlify.app/'];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // If origin is not provided or is in the allowedOrigins list, allow it
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // Allow cookies and authentication headers
};

app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/item", itemRoutes);
app.use("/api/category", categoryRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
