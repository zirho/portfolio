import React, { Component } from 'react'
import './projects.scss'
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

          <img src={item.thumb} className="thumb" />

          <div className="proj-content">
            <span className="role">{item.role.join(', ')}</span>
            <span className="time">{item.period}</span>
            <span className="tech">{item.skills.join(', ')}</span>

            <div className="desc">{item.desc}</div>
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

export { Projects }
