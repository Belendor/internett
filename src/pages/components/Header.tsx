import React from "react";

function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 rounded-lg header-container"> {/* Add rounded-lg class for rounded paddings */}
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/495px-Flower_poster_2.jpg?w=50&h=50"
            alt="Flower Seed Shop"
            style={{ maxWidth: '50px', maxHeight: '50px' }}
          />
        </div>
        <nav>
          <ul className={'nav-menu flex space-x-4'}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/apipage">Check out API</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
