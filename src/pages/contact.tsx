import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-auto max-w-screen-lg page-container">
        {/* Use "mx-auto" for centering and "max-w-screen-lg" for the maximum width */}
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
