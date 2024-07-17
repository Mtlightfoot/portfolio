import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const styles = {
    leftColumn: {
        backgroundColor: "#1E1E1E",
    },
    rightColumn: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
    },
    profileName: {
        fontWeight: "700",
        letterSpacing: "4px",
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
                            <img src="./frontend-icon.png" alt="An icon representing a frontend web developer" />
                            <h2 style={styles.profileName}>Matt<br></br>
                                Lightfoot
                            </h2>
                        </div>

                        <img id='profilePicture' src="./profile-picture.jpg" alt="A profile picture of Matt Lightfoot" />

                        <div style={styles.profileInfo}>
                            <h6 style={styles.title}><em>Specialisation:</em><br></br>
                                <span style={styles.subtitle}>Front End Web Development</span></h6>
                            <h6 style={styles.title}><em>Based in:</em><br></br>
                                <span style={styles.subtitle}>Rugby, Warwickshire</span></h6>
                        </div>

                        <div id='iconRow'>
                            <a href="mailto:m-lightfoot@hotmail.com"><img id='socialIcons' src="./email-icon.png" alt="An icon representing Email" /></a>
                            <a href="tel:07801963340"><img id='socialIcons' src="./phone-icon.png" alt="An icon representing a phone" /></a>
                            <a href="www.linkedin.com/in/matthew-lightfoot"><img id='socialIcons' src="./linkedin-icon.png" alt="An icon of the LinkedIn Logo" /></a>
                            <a href="https://github.com/Mtlightfoot"><img id='socialIcons' src="./git-icon.png" alt="An icon of the Git Logo" /></a>
                        </div>

                    </div>
                </Col>
                <Col md={8} id='rightColumn'>

                    <div style={styles.rightColumn} id='columnBox'>
                        <div>
                            <h1 id='slogan'>I'm Matt Lightfoot Front End Web Developer.</h1>
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