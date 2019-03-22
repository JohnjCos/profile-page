import React from 'react'

import avatar from '../assets/images/Close-profile.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="image avatar"><img src={avatar} alt="personal of John" /></div>
                    <div className="header-description">
                            <h2>John Cosgrove</h2>
                            <h3>Web Developer</h3>
                            <h3>Atlanta, GA</h3>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
