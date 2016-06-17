import React, { Component } from 'react'
import { ProjectData } from './projectData'

class Project extends Component {
  render() {
    const item = this.props.project

    return (
      <article className="project-wrapper">
        <div className="project">

          <header className="">
            <i className="fa fa-desktop fa-lg" aria-hidden="true"></i> <h4 className="name">{item.name}</h4>
          </header>

          {item.role ? <img src={item.thumb} className="thumb" /> : ''}

          <div className="proj-content">
            {item.role ? <span className="role">{item.role.join(', ')}</span> : ''}
            {item.period ? <span className="time">{item.period}</span> : ''}
            {item.skills ? <span className="tech">{item.skills.join(', ')}</span> : ''}
            {item.desc ? <div className="desc">{item.desc}</div> : ''}

          </div>
        </div>
      </article>
    )
  }
}

class Projects extends Component {
  render() {
    let projectList = ProjectData.map((item) => (
        <Project
          project={item}
          key={item.name}
            />
      )
    )

    return (
      <div>{projectList}</div>
    )
  }
}

export { Project, Projects }
