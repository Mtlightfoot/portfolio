import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../main.css"

const styles = {
    column: {
        overflow: 'hidden',
    }
}

function ContactMe() {
    return (
        <Container>
            <Row id='pageRow'>

                <Col id='aboutMeColumn' md={6}>

                    <h6 id='section-titles'>Images</h6>

                    <img id='aboutMePicture' src="./email.jpg" alt="A picture of a man sitting on a rock with the sea in the background" />
                    <div id='doublePictureBox'>
                        <img id='aboutMeSubPicture' src="phone.jpg" alt="" />
                        <img id='aboutMeSubPicture' src="contact.jpg" alt="" />
                    </div>
                </Col>
                <Col id='aboutMeColumnText' style={styles.column} md={6}>

                    <h1 id='aboutMe'>Want to get in touch? I'd love to hear from you, below you'll find the different places you can reach me...</h1>

                    <h6 id='section-titles'>Email Address</h6>
                    <a id='paragraph' href=''>M-lightfoot@hotmail.com</a>

                    <h6 id='section-titles'>Phone Number</h6>
                    <a id='paragraph' href=''>07801 963340</a>

                    <h6 id='section-titles'>Links</h6>

                    <div className='mt-auto justify-content-around'>
                        <div id='iconRow'>
                            <a href="mailto:m-lightfoot@hotmail.com"><img id='socialIconsAboutMePage' src="./email-icon.png" alt="An icon representing Email" /></a>
                            <a href="tel:07801963340"><img id='socialIconsAboutMePage' src="./phone-icon.png" alt="An icon representing a phone" /></a>
                            <a href="https://linkedin.com/in/matthew-lightfoot"><img id='socialIconsAboutMePage' src="./linkedin-icon.png" alt="An icon of the LinkedIn Logo" /></a>
                            <a href="https://github.com/Mtlightfoot"><img id='socialIconsAboutMePage' src="./git-icon.png" alt="An icon of the Git Logo" /></a>
                        </div>
                    </div>

                </Col>




            </Row>
        </Container>
    );
}

export default ContactMe;