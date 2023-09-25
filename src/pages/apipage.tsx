import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

function ApiPage() {
  const [catFacts, setCatFacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingRandomFact, setLoadingRandomFact] = useState(false);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
  }, []);

  const fetchCatFacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://cat-fact.herokuapp.com/facts');
      setCatFacts(response.data);
    } catch (error) {
      console.error('Error fetching cat facts:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearCatFacts = () => {
    setCatFacts([]);
    setRandomFact('');
  };

  const generateRandomFact = async () => {
    setLoadingRandomFact(true); // Set loadingRandomFact to true while fetching
    const response = await axios.get('https://cat-fact.herokuapp.com/facts');
    const randomIndex = Math.floor(Math.random() * response.data.length);
    setRandomFact((prevRandomFact) => response.data[randomIndex].text);
    setLoadingRandomFact(false); // Set loadingRandomFact back to false after fetching
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="page-container">
        <section className="contact-form p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Cat API</h1>
          <button
            onClick={fetchCatFacts}
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Fetching Cat Facts...' : 'Fetch Cat Facts'}
          </button>
          {catFacts.length > 0 && (
            <button
              onClick={clearCatFacts}
              className="bg-red-600 text-white py-2 px-4 ml-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Clear Cat Facts
            </button>
          )}
          {catFacts.length > 0 && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Cat Facts:</h2>
              <ul>
                {catFacts.map((fact) => (
                  <li
                    key={fact._id}
                    className="bg-gray-100 p-2 rounded shadow-md mb-2"
                  >
                    {fact.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={generateRandomFact}
            className="bg-green-600 text-white py-2 px-4 mt-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {loadingRandomFact
              ? 'Generating Random Cat Fact...'
              : 'Generate Random Cat Fact'}
          </button>
          {randomFact && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Random Cat Fact:</h2>
              <p className="bg-blue-100 p-4 rounded shadow-md">{randomFact}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ApiPage;
