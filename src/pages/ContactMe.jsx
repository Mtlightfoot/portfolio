import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../main.css"

const styles = {

};


function ContactMe() {
    return (
        <Container>
            <Row id='pageRow'>
                <Col md={12}>
                    <h1 id='slogan'>Contact Me <div class="loader"></div></h1>
                </Col>
                <Col id='aboutMeColumn' md={6}>
                    <img id='aboutMePicture' src="./email.jpg" alt="A picture of a man sitting on a rock with the sea in the background" />
                    <div id='doublePictureBox'>
                        <img id='aboutMeSubPicture' src="phone.jpg" alt="" />
                        <img id='aboutMeSubPicture' src="contact.jpg" alt="" />
                    </div>
                </Col>
                <Col id='aboutMeColumn' md={6}>
                    <Card id='contactMeCard'>
                        <Card.Body className='d-flex flex-column' id='project-body'>
                            <h6 id='project-title'>
                                Get in Touch
                            </h6>
                            <h6 id='contactMeDescription'>Want to get in touch? I'd love to hear from you, heres the different places you can reach me...</h6>
                            <h5 id='contactMeText'>Email Address:</h5>
                            <a href=''><Button id='contactBtn'>M-lightfoot@hotmail.com</Button></a>
                            <h5 id='contactMeText'>Phone number:</h5>
                            <a href=''><Button id='contactBtn'>07801 963340</Button></a>

                            <div className='mt-auto justify-content-around'>
                                <div id='iconRow'>
                                    <a href="mailto:m-lightfoot@hotmail.com"><img id='socialIconsAboutMePage' src="./email-icon.png" alt="An icon representing Email" /></a>
                                    <a href="tel:07801963340"><img id='socialIconsAboutMePage' src="./phone-icon.png" alt="An icon representing a phone" /></a>
                                    <a href="https://linkedin.com/in/matthew-lightfoot"><img id='socialIconsAboutMePage' src="./linkedin-icon.png" alt="An icon of the LinkedIn Logo" /></a>
                                    <a href="https://github.com/Mtlightfoot"><img id='socialIconsAboutMePage' src="./git-icon.png" alt="An icon of the Git Logo" /></a>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>




            </Row>
        </Container>
    );
}

export default ContactMe;