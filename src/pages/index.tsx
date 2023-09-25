import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function IndexPage() {
  return (
    <div >
      <Header />
      <main className="page-container">
        <section className="index-content">
          <h1>Welcome to the Flower Seed Shop!</h1>
          <p>Discover a world of beautiful flower seeds.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IndexPage;