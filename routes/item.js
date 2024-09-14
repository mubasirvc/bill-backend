const express = require("express");
const {
  addItem,
  getItemById,
  getAllItems,
  deleteItem,
} = require("../controllers/itemControllers");

const itemRoutes = express.Router();

itemRoutes.route("/").post(addItem).get(getAllItems)
itemRoutes.route("/:id").delete(deleteItem);
itemRoutes.route("/:id").get(getItemById);

module.exports = itemRoutes;
