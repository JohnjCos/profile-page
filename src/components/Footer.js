import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/JohnjCos" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:johnjacobcosgrove@gmail.com" className="icon fa-envelope-o">
                        <span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
