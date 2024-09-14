const express = require("express");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  getCategoryById,
} = require("../controllers/CategoryController");

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .post(createCategory)
  .get(getAllCategories)
  categoryRoutes.route("/:id").delete(deleteCategory);
  categoryRoutes.route("/:id").get(getCategoryById);

module.exports = categoryRoutes;
