import React from "react";

function ContactPage() {
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
      <hr className="separator" />
      <main>
        <section className="contact-form">
          <h1>Contact Us</h1>
          <p>Have a question or feedback? Reach out to us!</p>
          {/* Add your contact form here */}
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

export default ContactPage;
