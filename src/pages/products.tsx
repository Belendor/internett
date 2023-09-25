// ProductsPage.js
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";

function ProductsPage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "Flowers", // Default category
  });

  const [error, setError] = useState(""); // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check if any form fields are empty
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.quantity) {
      setError("Please fill out all fields.");
      return;
    }

    // Add your logic for submitting the form (e.g., API request or database update)
    // For demonstration purposes, we'll just display a success message.
    setSuccessMessage("Product added successfully!");

    // Reset the form fields
    setNewProduct({
      name: "",
      description: "",
      price: "",
      quantity: "",
      category: "Flowers",
    });

    // Clear any previous error message
    setError("");
  };

  return (
    <div>
      <Header />
      <main className="page-container">
        <section className="add-product">
          <h2>Add a New Product</h2>
          {/* Display error message */}
          {error && <p className="text-red-500">{error}</p>}
          {/* Display success message */}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <ProductForm
            newProduct={newProduct}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
