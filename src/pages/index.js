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

const DEFAULT_IMAGES = [

    { id: '3', src: full03, thumbnail: thumb03, caption: 'PodQuest', 
        description: 'This app lets you find,listen, and subscribe to podcasts. After making a account you are able to search through a library of podcasts to find the perfect one for you', 
        alt: 'A full stack app that lets you find,listen, and subscribe to podcasts',
        frontStack:' React, React-Howler, React - Redux, React-Router-Dom, React-Table, Redux, Redux-Form, Redux-Thunk',
        backStack:' Node.js, Express.js, Mongoose, Passport',
        repoLink:'https://github.com/thinkful-ei23/podquest-client',appLink:'https://podquest-app.herokuapp.com/'},
    { id: '1', src: full01, thumbnail: thumb01, caption: 'BattleShip', 
        description: 'A app that lets you play the game battleship with friends. After making a game, you and a friend are able to find out who is the best at destroying the others ships', 
        alt: 'a full stack app based around the game battleship using react, and node',
        frontStack:'React, Redux, Redux-Form, Redux-Thunk',
        backStack:'Node.js, Express.js, Mongoose, Cors',
        repoLink:'https://github.com/JohnjCos/Battleship',appLink: 'https://john-battleship.herokuapp.com/'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'CS Cards', 
        description: 'A learning app to help you learn the basic javascript definitions such as arrays. In addition you are able to keep track of your progress and even chat with other people using that app', 
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
                        <p> I am a web app developer geared towards creating, developing<br />
                            and maintaining clean, easy to use web applications.<br/>
                            Currently I am working with the MERN stack and in my free time working with vue.js and GraphQL<br/>
                            to develop new applications. Would love to work with a group of people who truly enjoy what they do.<br/>
                            I believe when people enjoy their work it generally not only makes everyone happier but also makes you<br/>
                            work faster and smarter. While not developing I am a pretty laid back guy who likes to <br/>
                            hang out with friends and play video games.</p>
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
                                <ul className="labeled-icons">
                                    
                                    <li><a href="https://github.com/JohnjCos" className="github">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/john-cosgrove-24052716b/">linkedin</a></li>
                                    <li><a href="mailto:johnjacobcosgrove@gmail.com" className="icon fa-envelope-o">
                                    Email</a></li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        678-549-5263
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