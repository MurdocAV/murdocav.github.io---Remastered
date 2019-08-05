import React from 'react'
import {NavLink, IndexLink} from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1 className="titleHeader">Name Placeholder</h1>
                </div>
                <div className="nav">
                    <NavLink className="homeLink" activeClassName="active" to={'/Home'}>Home</NavLink>
                    <NavLink
                        className="discographyLink"
                        activeClassName="active"
                        to={'/Discography'}>Discography</NavLink>
                    <NavLink className="contactLink" activeClassName="active" to={'/Contact'}>Contact</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation