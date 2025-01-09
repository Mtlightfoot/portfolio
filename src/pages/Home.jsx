import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {

    return (
        <Container>
            <Row id='pageRow'>
                <Col md={4} id='leftColumn'>

                    <div id='columnBox'>
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
                            <a href='https://docs.google.com/document/d/13mgz3TOaVO2W8qTHTPrqg2s8oNobX358/edit?usp=sharing&ouid=106275054910377850454&rtpof=true&sd=true'><Button id='cvBtn'>Download CV</Button></a>
                        </div>

                        <h6 id='section-titles'>Project Spotlight</h6>

                        <div className='projectSpotlightBox'>
                            <h5 className='spotlightSubtitle'>Artist Website</h5>
                            <a href="https://artist-website-mtl.netlify.app/"><img src="./artist-website.png" alt="A picture of an Artist website that was created by Matthew Lightfoot" id="spotlightImg" /></a>
                        </div>

                        <div className='projectSpotlightBox'>
                            <h5 className='spotlightSubtitle'>Cure My Boredom</h5>
                            <a href="https://curemyboredom.netlify.app/"><img src="./cure-my-boredom.png" alt="A picture of a website called Cure My Boredom that was created by Matthew Lightfoot" id="spotlightImg" /></a>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Home;