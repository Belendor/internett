import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ContactPage() {
  return (
    <div>
      <Header />
      <main className="page-container">
        <section className="contact-form">
          <h1>Contact Us</h1>
          <p>Have a question or feedback? Reach out to us!</p>
          {/* Add your contact form here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
