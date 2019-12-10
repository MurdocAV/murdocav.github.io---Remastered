import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1 className="titleHeader">Azaan Virk</h1>
                </div>
                <div className="nav">
                    <NavLink className="home Link" activeClassName="active" to={'/'}>Home</NavLink>
                    <NavLink
                        className="about Link"
                        activeClassName="active"
                        to={'/About'}>About</NavLink>
                    <NavLink className="projects Link" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink className="exampleForm Link" activeClassName="active" to={'/ExampleForm'}>Example Form</NavLink>
                    <NavLink className="references Link" activeClassName="active" to={'/References'}>References</NavLink>
                    <NavLink className="email Link" activeClassName="active" to={'/Email'}>Email</NavLink>
                    <NavLink className="hiring Link" activeClassName="active" to={'/Hiring'}>Hiring</NavLink>
                    <NavLink className="documentation Link" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation