import React from 'react'
import "./Skills.css"
import Frontend from './Frontend.jsx'
import Tools from './Tools.jsx'
import SkillsComponent from './SkillsComponent.jsx'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">I work with</span>
        <div className="scroll flex flex-col justify-center items-center">
          <div className="mb-6">
            <SkillsComponent></SkillsComponent>
          </div>
        </div>
    </section>
  )
}

export default Skills
