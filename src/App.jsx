import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/home.css';
import './styles/loader.css';
import './styles/footer.css';
import ProgressBar from './components/progressbar.js';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  
  // Simulate data fetching or initial loading
  useEffect(() => {
    // Simulate a delay for loading effect
    const timer = setTimeout(() => {
      setIsLoading(false); // Data has "loaded"
    }, 1000); // Set to 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {isLoading ? ( // Conditionally render loader or the app
        <div className="loader-container">
          <div className="spinner"></div> {/* Loader effect */}
        <p>Loading...</p>
        </div>
      ) : (
        <>
        <div className='mainSec'>
        <ProgressBar />
          <Header />
          <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
