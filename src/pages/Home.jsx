import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    },
    title: {
        color: "#E3E0D3",
    },
    subtitle: {
        fontSize: '20px',
        fontWeight: '900'
    },
    slogan: {
        fontSize: '70px',
        fontWeight: "900",
        color: '#E3E0D3'
    },

    skills: {
        color: "#7D7C70",
        fontWeight: '600',
        fontSize: '40px',
    }
}

function Home() {

    return (
        <Container id='homeContainer'>
            <Row id='homeRow'>
                <Col md={4} id='leftColumn'>
                    <div style={styles.leftColumn} id='columnBox'>
                        <div id='profileName'>
                            <img src="./frontend-icon.png" alt="An icon representing a frontend web developer" />
                            <h2 style={styles.profileName}>Matt<br></br>
                                Lightfoot
                            </h2>
                        </div>
                        <img id='profilePicture' src="./profile-picture.jpg" alt="A profile picture of Matt Lightfoot" />
                        <div style={styles.profileInfo}></div>
                        <h6 style={styles.title}><em>Specialisation:</em><br></br>
                            <span style={styles.subtitle}>Front End Web Development</span></h6>
                        <h6 style={styles.title}><em>Based in:</em><br></br>
                            <span style={styles.subtitle}>Rugby, Warwickshire</span></h6>
                    </div>
                </Col>
                <Col md={8} id='rightColumn'>
                    <div style={styles.rightColumn} id='columnBox'>
                        <div>
                            <h1 style={styles.slogan} >I'm Matt Lightfoot
                                <br></br>
                                Front End Web Developer.</h1>
                            <h1 style={styles.skills}>HTML - CSS - JavaScript - React.js - JQuery - Node.js - APIs - Bootstrap - Material UI</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;