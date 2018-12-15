import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/battleshipLanding.jpg'
import thumb02 from '../assets/images/thumbs/CS-splash.jpg'
import thumb03 from '../assets/images/thumbs/pod-splash.jpg'

import full01 from '../assets/images/fulls/battleshipBoard.jpg'
import full02 from '../assets/images/fulls/CS-dashboard.jpg'
import full03 from '../assets/images/fulls/podquest-dash.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const DEFAULT_IMAGES = [

    { id: '3', src: full03, thumbnail: thumb03, caption: 'PodQuest', 
        description: 'This app lets you find,listen, and subscribe to podcasts. After making a account you are able to search through a library of podcasts to find the perfect one for you', 
        alt: 'A full stack app that lets you find,listen, and subscribe to podcasts',
        frontStack:' React, React-Howler, React - Redux, React-Router-Dom, React-Table, Redux, Redux-Form, Redux-Thunk',
        backStack:' Node.js, Express.js, Mongoose, Passport',
        repoLink:'https://github.com/thinkful-ei23/podquest-client',appLink:'https://podquest-app.herokuapp.com/'},
    { id: '1', src: full01, thumbnail: thumb01, caption: 'BattleShip', 
        description: 'A app that lets you play the game battleship with friends. After making a game, you and a friend are able to find out who is the best at outthinking the other', 
        alt: 'a full stack app based around the game battleship using react, and node',
        frontStack:'React, Redux, Redux-Form, Redux-Thunk',
        backStack:'Node.js, Express.js, Mongoose, Cors',
        repoLink:'https://github.com/JohnjCos/Battleship',appLink: 'https://john-battleship.herokuapp.com/'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'CS Cards', 
        description: 'A learning app to help you learn the basic javascript definitions such as arrays. In addition you are able to keep track of your progress and even chat with other people using the app', 
        alt:'a full stack learning app using react, and node, and spaced repition',
        frontStack:'React, Redux, Redux-Form, Redux-Thunk',
        backStack: 'Node.js, Express.js, Mongoose, JWT',
        repoLink:'https://github.com/thinkful-ei23/Client-CS-Cards',appLink:'https://client-cs-cards.herokuapp.com/'},
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
                        <div>
                            <p>I am a web developer who creates, refines,
                                and maintains web applications. Clean, beautiful, and friendly design is what I do.
                                Currently I work with the MERN stack. But in my free time,
                                I build Vue.JS apps using GraphQL.</p>
                                <p>I don't want a job. I want a career building apps that make someone's day better.</p>
                                <p>When not programming, I enjoy playing games, reading books, and exercising.</p>
                        </div>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({
                            id, src, thumbnail, caption, description, repoLink,appLink,frontStack,backStack }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            appLink,
                            repoLink,
                            frontStack,
                            backStack
                        }))} />
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                    </div>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <div className="labeled-icons">
                                    
                                    <div className="fa"><a href="https://github.com/JohnjCos"><FontAwesomeIcon icon={faGithub} />&nbsp;GitHub</a></div>
                                    <div className="fa"><a href="https://www.linkedin.com/in/john-cosgrove-24052716b/"><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</a></div>
                                    <div className="fa"><a href="mailto:johnjacobcosgrove@gmail.com"><FontAwesomeIcon icon={faEnvelope} />&nbsp;
                                    Email</a></div>
                                    <div className="fa"><FontAwesomeIcon icon={faPhone} />&nbsp;
                                        678-549-5263
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex