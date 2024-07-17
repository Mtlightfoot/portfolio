import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../main.css';
import '../eye.css'
import CardSlider from '../components/CardSlider'


function Projects() {



    return (
        <Container id='projectContainer'>
            <Row id='pageRow'>
                <Col id='project-col'>
                    <h1 id='slogan'>My Projects <div class="loader"></div></h1>
                    <CardSlider />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;