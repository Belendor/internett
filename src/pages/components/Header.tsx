// Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="flex justify-between items-center container mx-auto header-container"> {/* Add a container div and a class */}
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
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
