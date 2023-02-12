import React from 'react'

const Info = () => {
  const date = new Date(2022,0, 20);
  const currdate = new Date();
  const year1 = date.getFullYear();
  const month1 = date.getMonth();
  const year2 = currdate.getFullYear();
  const month2 = currdate.getMonth();
  const exp = (year2 - year1) * 12 + (month2 - month1) - 1;
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i className="bx bx-award about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">{exp} Months Working</span>
        </div>
        <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">5+ Projects</span>
        </div>
        <div className="about_box">
        <i class='bx bxs-book-open about_icon'></i>
            <h3 className="about_title">Learning</h3>
            <span className="about_subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info
