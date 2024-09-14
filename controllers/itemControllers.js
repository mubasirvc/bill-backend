const Category = require("../models/Category");
const Item = require("../models/Item");

const addItem = async (req, res) => {
  try {
    const { name, category } = req.body;

    const existingItem = await Item.findOne({ name });
    if (existingItem) {
      return res.status(400).json({ message: "Item already exists" });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found" });
    }

    const newItem = new Item({
      name,
      category,
    });

    await newItem.save();

    return res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const item = await Item.find().populate("category");
    const items = item.map(item => ({
      _id: item._id,
      name: item.name,
      category: item.category ? item.category.name : null,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    
    return res
      .status(200)
      .json({ message: "Items retrieved successfully", items });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id).populate("category");

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res
      .status(200)
      .json({ message: "Item retrieved successfully", item });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res
      .status(200)
      .json({ message: "Item deleted successfully", item: deletedItem });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { addItem, deleteItem, getAllItems, getItemById };
