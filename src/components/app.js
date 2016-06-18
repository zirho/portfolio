import React, { Component } from 'react'
import { render }           from 'react-dom'
import { Link } from 'react-router'
import { Projects }         from './projects'
import './projects.scss'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header navbar navbar-inverse navbar-fixed-top">
          <div className="top-bar container-fluid text-center">
            <Link to="/"className="navbar-brand">Senior Software Engineer</Link>
          </div>
        </header>
        <div className="fixed">
          <section className="no-padding main container-fluid">
            <div className="row">
              <aside id="left-column" className=" no-padding col-xs-12 col-sm-4 col-lg-3">

                <section className="profile">
                  <img src="img/profile.png" className="profile-pic" />
                  <div className="">
                    <span className="profile-name">Joshua Youngjae Ji</span>
                  </div>
                </section>

                <section className="filter">
                  <h4> Filters</h4>
                  <div className="form-group">
                    <input type="checkbox" name="ft-web" id="ft-web" autocomplete="off" />
                    <div className="btn-group">
                      <label for="ft-web" className="btn btn-info">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                      </label>
                      <label for="ft-web" className="btn btn-default active">
                        Web app
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" name="ft-responsive" id="ft-responsive" autocomplete="off" />
                    <div className="btn-group">
                      <label for="ft-responsive" className="btn btn-info">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                      </label>
                      <label for="ft-responsive" className="btn btn-default active">
                        Responsive
                      </label>
                    </div>
                  </div>
                </section>

              </aside>
              <section id="main-column" className=" no-padding col-xs-12 col-sm-8 col-lg-9">
                <nav id="nav-wrapper">
                  <div className="">
                    <div className="no-padding container-fluid">
                      <div id="navbar" className="no-padding">
                        <ul className="no-padding nav navbar-nav nav-justified">
                          <li><Link to="/" activeClassName="active">Portfolio</Link></li>
                          <li><Link to="/about" activeClassName="active">About</Link></li>
                          <li><a target="_blank" href="https://github.com/zirho/">Github</a></li>
                          <li><a target="_blank" href="http://zirho.github.io/">Blog</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>

                <div className="content-wrapper">
                  <section id="content">
                    {this.props.children}
                  </section>
                </div>

              </section>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
