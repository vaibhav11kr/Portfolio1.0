import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import "./Home.css";
import Social from './Social';
import ScrollDown from './ScrollDown';
import profile from '../../assets//profile.jpg'
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section className={`h-auto section flex w-[80%] flex-col container ${loading ? 'loading' : ''}`} id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="h-auto flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-12">
          <div className="mb-10">
            <img src={profile} alt="" className='h-24 md:h-40 rounded-full'/>
          </div>
          <div className="animate-bounce text-4xl font-bold font-plus-jakarta scroll-mb-10">
          Hello! I'm Vaibhav Kumar
          </div>
          <div className="flex flex-col font-medium items-center text-center">
            <p className='text-3xl mb-8'>a software developer, dedicated to driving innovation and delivering robust solutions.⚡️</p>
          <p className='text-xl'>Discover the magic of awesome UIs crafted with some coffee ☕️ and music 🎧.
Let's elevate your digital experience together.</p>
          </div>

        </div>
        <motion.div className="home_scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <ScrollDown />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
