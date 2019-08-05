import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="nav">
                    <NavLink className="projectsLink" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink
                        className="homeLink"
                        activeClassName="active"
                        to={'/Home'}>Home</NavLink>
                    <NavLink className="documentLink" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
                <div className="title">
                    <h1 className="titleHeader">MurdocAV</h1>
                </div>
            </div>
        )
    }
}

export default Navigation