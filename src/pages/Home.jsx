import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const styles = {
    rightColumn: {
        display: 'flex',
        flexDirection: "column",
        marginBottom: '50px',
        height: '100%',
    },
    profileName: {
        fontWeight: "800",
        letterSpacing: "1px",
        fontSize: "2rem",
        marginLeft: '10px',
    },
    profileInfo: {
        marginTop: '10px',
        marginLeft: '6px'
    },
    title: {
        color: "#E3E0D3",
        fontWeight: '600',
        fontSize: '1.5rem',
    },
    subtitle: {
        fontSize: '1.25rem',
        fontStyle: 'italic',
    },
}

function Home() {

    return (
        <Container>
            <Row id='pageRow'>
                <Col md={4} id='leftColumn'>
                    {/* <h6 id='section-titles'>Welcome to my Portfolio</h6> */}

                    <div id='columnBox'>
                        {/* <div id='profileName'>
                            <h2 style={styles.profileName}>Welcome to my Portfolio</h2>
                            <img id='profileIcon' src="./front-end-web-development.svg" alt="An icon representing a frontend web developer" />
                        </div> */}
                        <div id='profileNameMobile'>
                        </div>
                        <h6 id='section-titles'>Image<br></br></h6>

                        <img id='profilePicture' src="./profile-picture.jpg" alt="A profile picture of Matt Lightfoot" />

                        <h6 id='section-titles'>Specialisation<br></br></h6>
                        <h1 id='profile-descriptions'>Front End Web Development</h1>

                        <h6 id='section-titles'>Based</h6>
                        <h1 id='profile-descriptions'>Rugby, Warwickshire</h1>

                        <h6 id='section-titles'>Links<br></br></h6>

                        <div id='iconRow'>
                            <a href="mailto:m-lightfoot@hotmail.com"><img id='socialIcons' src="./email-icon.png" alt="An icon representing Email" /></a>
                            <a href="tel:07801963340"><img id='socialIcons' src="./phone-icon.png" alt="An icon representing a phone" /></a>
                            <a href="https://linkedin.com/in/matthew-lightfoot"><img id='socialIcons' src="./linkedin-icon.png" alt="An icon of the LinkedIn Logo" /></a>
                            <a href="https://github.com/Mtlightfoot"><img id='socialIcons' src="./git-icon.png" alt="An icon of the Git Logo" /></a>
                        </div>
                    </div>
                </Col>
                <Col md={8} id='rightColumn'>

                    <div id='columnBox'>
                        <div>
                            <h6 id='section-titles'>Intro</h6>
                            <h1 id='slogan'>I'm Matt Lightfoot Front End Web</h1>

                            <svg viewBox="0 0 100 17">
                                <defs>
                                    <linearGradient id="gradient">
                                        <stop color="#E3E0D3" />
                                    </linearGradient>
                                    <pattern id="wave" x="0" y="-3" width="100%" height="110%" patternUnits="userSpaceOnUse">
                                        <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="#E3E0D3">
                                            <animateTransform
                                                attributeName="transform"
                                                begin="0s"
                                                dur="1.5s"
                                                type="translate"
                                                from="0,0"
                                                to="40,0"
                                                repeatCount="indefinite" />
                                        </path>
                                    </pattern>
                                </defs>
                                <text textAnchor="middle" x="33.5" y="12" fontSize="14" fill="#7B7A6F" fillOpacity="0.5" id='liquidSlogan'>Developer.</text>
                                <text textAnchor="middle" x="33.5" y="12" fontSize="14" fill="url(#wave)" fillOpacity="1" id='liquidSlogan'>Developer.</text>
                            </svg>

                            <h6 id='section-titles'>Skills</h6>
                            <h1 id='skills'>HTML - CSS - SCSS - JavaScript - React.js - JQuery - Node.js - APIs - Bootstrap - Material UI - Wordpress</h1>
                        </div>
                        <div>
                            <a href='https://docs.google.com/document/d/1VZxcRjzsV2ZTtb0msm2PhW421wem9iupoWJ9Ka_OO4I/edit'><Button id='cvBtn'>Download CV</Button></a>
                        </div>

                        <h6 id='section-titles'>Project Spotlight</h6>

                        <div className='projectSpotlightBox'>
                            <div>
                                <h5 className='spotlightSubtitle'>Artist Website</h5>
                            </div>
                            <a href="https://artist-website-mtl.netlify.app/"><img src="./artist-website.png" alt="A picture of an Artist website that was created by Matthew Lightfoot" id="spotlightImg" /></a>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Home;