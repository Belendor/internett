import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-auto max-w-screen-lg page-container">
        {/* Use "mx-auto" for centering and "max-w-screen-lg" for the maximum width */}
        <section className="index-content">
          <h1>Welcome to the Flower Seed Shop!</h1>
          <p>Discover a world of beautiful flower seeds.</p>
          <p>Please Exploare navigation bar</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IndexPage;
