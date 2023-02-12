import React from 'react'
import { Link } from 'react-router-dom'
const ProjectsItems = ({item}) => {
  return (
    <div className='work_card' key={item.id}>
      <img src= {item.image} alt="pro" className='work_img' />
      <h3 className="work_title">{item.title}</h3>
      <a href= {item.url} key={item.id} target= "_blank" className='work_button'>
        Hit the URL<i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  )
}

export default ProjectsItems
