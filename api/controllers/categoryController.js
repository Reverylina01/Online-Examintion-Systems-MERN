// Import the mongoose library
const mongoose = require("mongoose");

// Import the Category model
const Category = require("../models/category");

// Create a category
const createCategory = async (req, res) => {
  const { name } = req.body;

  // Ensure the category name is unique
  let existingCategory;
  try {
    existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists. Please try again." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Fetching category failed, please try again later." });
  }

  const newCategory = new Category({ name });

  try {
    const result = await newCategory.save();
    return res.status(201).json({ category: result });
  } catch (err) {
    return res.status(500).json({ message: "Creating category failed, please try again later." });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No categories found." });
    }
    return res.status(200).json({ categories });
  } catch (err) {
    return res.status(500).json({ message: "Fetching categories failed, please try again later." });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }
    return res.status(200).json({ category });
  } catch (err) {
    return res.status(500).json({ message: "Fetching category failed, please try again later." });
  }
};

// Update category
const updateCategory = async (req, res) => {
  const { name } = req.body;
  const categoryId = req.params.cid;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    category.name = name;

    const updatedCategory = await category.save();
    return res.status(200).json({ category: updatedCategory });
  } catch (err) {
    return res.status(500).json({ message: "Updating category failed, please try again later." });
  }
};

// Delete category by ID
const deleteCategoryById = async (req, res) => {
  const categoryId = req.params.cid;

  try {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }
    return res.status(200).json({ message: "Category deleted successfully." });
  } catch (err) {
    return res.status(500).json({ message: "Deleting category failed, please try again later." });
  }
};

// Export methods
exports.createCategory = createCategory;
exports.getAllCategories = getAllCategories;
exports.getCategoryById = getCategoryById;
exports.updateCategory = updateCategory;
exports.deleteCategoryById = deleteCategoryById;
