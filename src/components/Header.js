import React from 'react'

import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="image avatar"><img src={avatar} alt="personal of John" /></div>
                    <h1><strong>John Cosgrove</strong>,<br/>Located in Atlanta Georgia.<br/>
                        Web Developer looking for opportunities<br/> to further my career.</h1>
                </div>
            </header>
        )
    }
}

export default Header
