import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap'
import '../main.css';
import CardSlider from '../components/CardSlider'

function Projects() {



    return (
        <Container id='projectContainer'>
            <Row id='pageRow'>
                <Col>
                    <h1 id='slogan'>My Projects .</h1>
                    <CardSlider />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;