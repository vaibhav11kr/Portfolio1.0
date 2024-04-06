import React from 'react';
import { motion } from 'framer-motion';

const Info = ({ exp }) => {
  return (
    <div className="about_info grid">
      <motion.div
        className="about_box"
        whileHover={{ scale: 1.05 }} // Scale Animation
        whileTap={{ scale: 0.95 }} // Scale Animation for touch devices
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">{exp} Months Working</span>
      </motion.div>

      <motion.div
        className="about_box"
        whileHover={{ scale: 1.05 }} // Scale Animation
        whileTap={{ scale: 0.95 }} // Scale Animation for touch devices
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">5+ Projects</span>
      </motion.div>

      <motion.div
        className="about_box"
        whileHover={{ scale: 1.05 }} // Scale Animation
        whileTap={{ scale: 0.95 }} // Scale Animation for touch devices
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <i className='bx bxs-book-open about_icon'></i>
        <h3 className="about_title">Learning</h3>
        <span className="about_subtitle">24/7</span>
      </motion.div>
    </div>
  );
}

export default Info;
