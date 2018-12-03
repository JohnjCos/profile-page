import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/battleship-game.jpg'
import thumb02 from '../assets/images/thumbs/CS-splash.jpg'
import thumb03 from '../assets/images/thumbs/pod-splash.jpg'

import full01 from '../assets/images/fulls/battleship-splashpage.jpg'
import full02 from '../assets/images/fulls/CS-dashboard.jpg'
import full03 from '../assets/images/fulls/podquest-dash.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'BattleShip', description: 'a full stack app based around the game battleship using react, and node', alt: 'a full stack app based around the game battleship using react, and node'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'CS Cards', description: 'a full stack learning app using react, and node, and spaced repition', alt:'a full stack learning app using react, and node, and spaced repition'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'PodQuest', description: 'a full stack app that lets you find,listen, and subscribe to podcasts', alt: 'a full stack app that lets you find,listen, and subscribe to podcasts'},
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "John Cosgrove"
        const siteDescription = "Profile Page"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p> I am a web app developer geared towards creating, developing<br />
                            and maintaining clean, easy to use web applications.<br/>
                            Currently working with the MERN stack and in my free time working with vue.js and GraphQL<br/>
                            to develop new applications.</p>
                        <ul className="actions">
                            <li><a href="https://www.linkedin.com/in/john-cosgrove-24052716b/" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/JohnjCos" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1815 FairOaks Pl<br />
                                        Decatur, GA 30033<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        678-549-5263
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:johnjacobcosgrove@gmail.com">JohnJacobCosgrove@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex