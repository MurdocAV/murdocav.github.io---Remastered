import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'

class Navigation  extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1 className="titleHeader">Azaan Virk</h1>
                </div>
                <div className="nav">
                    <NavLink className="home Link grow" activeClassName="active" to={'/Home'}>Home</NavLink>
                    <NavLink
                        className="about Link grow"
                        activeClassName="active"
                        to={'/About'}>About</NavLink>
                    <NavLink className="projects Link grow" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink className="exampleForm Link grow" activeClassName="active" to={'/ExampleForm'}>Example Form</NavLink>
                    <NavLink className="references Link grow" activeClassName="active" to={'/References'}>References</NavLink>
                    <NavLink className="email Link grow" activeClassName="active" to={'/Email'}>Email</NavLink>
                    <NavLink className="hiring Link grow" activeClassName="active" to={'/Hiring'}>Hiring</NavLink>
                    <NavLink className="documentation Link grow" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation