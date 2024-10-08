import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const styles = {
    leftColumn: {
        backgroundColor: "#1E1E1E",
        marginBottom: "50px"
    },
    rightColumn: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
    },
    profileName: {
        fontWeight: "800",
        letterSpacing: "2px",
        fontSize: "36px"
    },
    profileInfo: {
        marginTop: '10px',
        marginLeft: '6px'
    },
    title: {
        color: "#E3E0D3",
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: '900'
    },
}

function Home() {

    return (
        <Container>
            <Row id='pageRow'>
                <Col md={4} id='leftColumn'>
                    <div style={styles.leftColumn} id='columnBox'>
                        <div id='profileName'>
                            <h2 style={styles.profileName}>Matt<br></br>
                                Lightfoot
                            </h2>
                            <img id='profileIcon' src="./front-end-web-development.svg" alt="An icon representing a frontend web developer" />
                        </div>
                        <div id='profileNameMobile'>
                            <h2 id='profileNameMobileText'>Matt Lightfoot</h2>
                        </div>

                        <img id='profilePicture' src="./profile-picture.jpg" alt="A profile picture of Matt Lightfoot" />

                        <div style={styles.profileInfo}>
                            <h6 style={styles.title}><em>Specialisation:</em><br></br>
                                <span style={styles.subtitle}>Front End Web Development</span></h6>
                        </div>

                        <div id='iconRow'>
                            <a href="mailto:m-lightfoot@hotmail.com"><img id='socialIcons' src="./email-icon.png" alt="An icon representing Email" /></a>
                            <a href="tel:07801963340"><img id='socialIcons' src="./phone-icon.png" alt="An icon representing a phone" /></a>
                            <a href="https://linkedin.com/in/matthew-lightfoot"><img id='socialIcons' src="./linkedin-icon.png" alt="An icon of the LinkedIn Logo" /></a>
                            <a href="https://github.com/Mtlightfoot"><img id='socialIcons' src="./git-icon.png" alt="An icon of the Git Logo" /></a>
                        </div>

                    </div>
                </Col>
                <Col md={8} id='rightColumn'>

                    <div style={styles.rightColumn} id='columnBox'>
                        <div>
                            <h1 id='slogan'>I'm Matt Lightfoot Front End Web</h1>

                            <svg viewBox="0 0 100 20">
                                <defs>
                                    <linearGradient id="gradient">
                                        <stop color="#E3E0D3" />
                                    </linearGradient>
                                    <pattern id="wave" x="0" y="-3" width="100%" height="100%" patternUnits="userSpaceOnUse">
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
                                <text textAnchor="middle" x="42" y="11" fontSize="15" fill="#7B7A6F" fillOpacity="0.5" id='liquidSlogan'>Developer.</text>
                                <text textAnchor="middle" x="42" y="11" fontSize="15" fill="url(#wave)" fillOpacity="1" id='liquidSlogan'>Developer.</text>
                            </svg>

                            <h1 id='skills'>HTML - CSS - JavaScript - React.js - JQuery - Node.js - APIs - Bootstrap - Material UI - Wordpress</h1>
                        </div>
                        <div>
                            <a href='https://docs.google.com/document/d/1VZxcRjzsV2ZTtb0msm2PhW421wem9iupoWJ9Ka_OO4I/edit'><Button id='cvBtn'>Download CV</Button></a>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Home;