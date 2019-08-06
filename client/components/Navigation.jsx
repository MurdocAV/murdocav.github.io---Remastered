import React from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
                <div className="navigation">
                    <NavLink className="projectsLink" activeClassName="active" to={'/Projects'}>Projects</NavLink>
                    <NavLink className="homeLink" activeClassName="active" to={'/Home'}>Home</NavLink>
                    <NavLink className="documentLink" activeClassName="active" to={'/Documentation'}>Documentation</NavLink>
                </div>
        )
    }
}

export default Navigation