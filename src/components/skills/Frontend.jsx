import React from 'react'

const Frontend = () => {
  return (
    <div className='skills_content'>
        <section className="skills">
            <div className='skills_title'>
                <h3 className="skills_group">Frontend</h3>
            </div>
            <div className="skill_container">
                <div className="skill">
                    <div className="subject">HTML</div>
                    <div className="progress_bar" value = '90%'>
                        <div className="progress_line" style={{maxWidth: `90%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">CSS</div>
                    <div className="progress_bar" value = '70%'>
                        <div className="progress_line" style={{maxWidth: `70%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">JavaScript</div>
                    <div className="progress_bar" value = '80%'>
                        <div className="progress_line" style={{maxWidth: `80%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    
                    <div className="subject">React JS</div>
                    <div className="progress_bar" value = '80%'>
                        <div className="progress_line" style={{maxWidth: `80%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">SQL</div>
                    <div className="progress_bar" value = '80%'>
                        <div className="progress_line" style={{maxWidth: `80%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">Tailwind CSS</div>
                    <div className="progress_bar" value = '80%'>
                        <div className="progress_line" style={{maxWidth: `80%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">Responsive Design</div>
                    <div className="progress_bar" value = '85%'>
                        <div className="progress_line" style={{maxWidth: "85%"}}></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Frontend
