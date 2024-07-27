import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap'
import '../main.css';

const styles = {
    
}

function AboutMe() {

    return (
        <Container>
            <Row id='pageRow'>
                <Col md={12}>
                    <h1 id='slogan'>About Me <div class="loader"></div></h1>
                </Col>
                <Col id='aboutMeColumn' md={6}>
                    <img id='aboutMePicture' src="./matt-landscape.jpg" alt="A picture of a man sitting on a rock with the sea in the background" />
                    <div id='doublePictureBox'>
                        <img id='aboutMeSubPicture' src="coding.jpg" alt="" />
                        <img id='aboutMeSubPicture' src="design.jpg" alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <h1 id='aboutMe'>I'm Matt, an Aspiring Front End Web Developer who loves to craft solid frontend products with great user experiences.</h1>
                    <p id='paragraph'>Hi there, thanks for stopping by! My name's Matt and I am currently pursuing a life-long career into something I really enjoy doing and believe I excel at which is Front End Web Development. </p>
                    <p id='paragraph'>I have been self learning coding via online courses for over a year now, completed many solo and group projects, I have graduated from a Front End Web Development boot camp and am also currently on an internship for Front End Web Development with a company called TrashCoin.</p>

                    <p id='paragraph'>  In my current position as a kitchen designer I oversee and arrange kitchen fits which involves a lot of problem-solving and being extremely methodical which I believe are great strengths that I utilize when it comes to coding.</p>
                </Col>
            </Row>
        </Container >
    )
}

export default AboutMe;