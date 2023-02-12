import React from 'react'

const Tools = () => {
  return (
    <div className="skills_content">
        <section className="skills">
            <div className='skills_title'>
                <h3 className="skills_group">Tools & Technologies</h3>
            </div>
            <div className="skill_container">
                <div className="skill">
                    <div className="subject">Canvas</div>
                    <div className="progress_bar" value = '95%'>
                        <div className="progress_line" style={{maxWidth: `95%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">Drupal</div>
                    <div className="progress_bar" value = '85%'>
                        <div className="progress_line" style={{maxWidth: `85%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">GIT</div>
                    <div className="progress_bar" value = '75%'>
                        <div className="progress_line" style={{maxWidth: `75%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    
                    <div className="subject">Figma</div>
                    <div className="progress_bar" value = '50%'>
                        <div className="progress_line" style={{maxWidth: `50%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">Agile</div>
                    <div className="progress_bar" value = '88%'>
                        <div className="progress_line" style={{maxWidth: `88%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">Team Player</div>
                    <div className="progress_bar" value = '95%'>
                        <div className="progress_line" style={{maxWidth: `95%`}}></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="subject">DSA</div>
                    <div className="progress_bar" value = '83%'>
                        <div className="progress_line" style={{maxWidth: "83%"}}></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Tools
