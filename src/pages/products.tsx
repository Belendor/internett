import React, { useState } from "react";

function ProductsPage() {
  // State to manage form input values
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "Flowers", // Default category
  });

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your logic to create a new product with the data in the "newProduct" state.
    // You can send an API request, update a database, or manage product data as needed.
    console.log("New Product:", newProduct);
    // Reset the form fields
    setNewProduct({
      name: "",
      description: "",
      price: "",
      quantity: "",
      category: "Flowers",
    });
  };

  return (
    <div>
      <header className="bg-indigo-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/495px-Flower_poster_2.jpg?w=50&h=50"
              alt="Flower Seed Shop"
              style={{ maxWidth: '50px', maxHeight: '50px' }}
            />
          </div>
          <nav>
            <ul className="nav-menu flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr className="separator" />
      <main>
        <section className="add-product">
          <h2>Add a New Product</h2>
          {/* Add product form */}
          <form onSubmit={handleSubmit} className="add-product-form">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  step="0.01"
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  required
                >
                  <option value="Flowers">Flowers</option>
                  <option value="Seeds">Seeds</option>
                  {/* Add more category options as needed */}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </section>
      </main>
      <hr className="separator" />
      <footer className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <section className="contact-info">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@flowerseedshop.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <address className="text-sm">
              123 Flower Street
              <br />
              Bloomington, USA
            </address>
          </section>
          <section className="social-media">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default ProductsPage;
