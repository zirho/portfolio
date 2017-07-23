import React           from 'react'
import { ProfileData } from './profile-data'

export const Profile = () => (
  <section className="profile">
    <img src="img/profile.png" className="profile-pic" />
    <div className="">
      <span className="profile-name">{ProfileData.name}</span>
    </div>

    <div className="contact">
      <span className="email"><a href={`mailto:${ProfileData.email}?Subject=Hello%20Joshua`}>{ProfileData.email}</a></span>
      <span className="cell">{ProfileData.cell}</span>
      <span className="address">{ProfileData.address}</span>
    </div>

    <div className="desc">
    This web app is built on top of my webpack-app-starter.<br/>
    Webpack, Webpack dev server, Babel(es2015, stage-2), ESLint(Airbnb-base), reactjs, react-router, Scss, Bootstrap, Fontawesome, and testing(jsdom, enzyme)
    </div>
  </section>
)
