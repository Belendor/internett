// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto footer-container"> {/* Add a container div and a class */}
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
  );
}

export default Footer;
