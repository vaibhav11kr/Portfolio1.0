import React, { useState, useEffect } from 'react';
import "./Home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`home section ${loading ? 'loading' : ''}`} id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className={`home_img ${loading ? 'loading' : ''}`}></div>
          <Data setLoading={setLoading} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
