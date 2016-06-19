import React, { Component } from 'react'
import { ProjectData }      from './projectData'

class Project extends Component {
  render() {
    const item = this.props.project

    return (
      <article className="project-wrapper">
        <div className="project">

          <header className="">
            <i className="fa fa-desktop fa-lg" aria-hidden="true"></i> <h4 className="name">{item.name}</h4>
          </header>

          {item.thumb ? <img src={item.thumb} className="thumb" /> : <div className="thumb no-thumb"><i className="fa fa-television fa-5x" aria-hidden="true"></i></div>}

          <div className="proj-content">
            {item.url ? <a href={item.url} target="_blank" className="url">{item.url}</a> : ''}
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
      <div className="project-list">{projectList}</div>
    )
  }
}

export { Project, Projects }
