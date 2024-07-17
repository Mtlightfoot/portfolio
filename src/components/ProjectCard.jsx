import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../main.css'
import projects from '../data/projects.json';

function ProjectCard({ id, image, title, description, site, repo, skills }) {
    return (
        <Card id='projectCard'>
            <Card.Img variant="top" style={{ backgroundImage: `url(${image})` }} id='card-img-top' />
            <Card.Body className='d-flex flex-column' id='project-body'>
                <h6 id='project-title'>
                    {title}
                </h6>
                <h6 id='project-description'>{description}</h6>
                <div className='mt-auto justify-content-around'>
                    <a href={site}><Button id='projectBtn'>Website</Button></a>
                    <a href={repo}><Button id='projectBtn'>Repo</Button></a>
                </div>

            </Card.Body>
            <Card.Footer id='project-footer'><h6 id='project-footer-text'>{skills}</h6></Card.Footer>

        </Card>
    );
}

export default ProjectCard;