import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { capitializeSentence, totalExperience ,user } from '../utils/utils';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import backgroundImage from '../assets/images/bg.jpg';

const Home = () => {

  const iconSize = '2xl';
  const { contact: { linkedIn, github }, careerHighlights, name, position } = user;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className='d-flex justify-content-center align-items-center text-center'
    >
      <Container>
        {/* Top Section */}
        <Row className='justify-content-center mb-4'>
          <Col lg={8}>
            <h1 className='text-dark'>
              Hello, I'm <span className='text-primary'>{name || 'John Doe'}</span>
            </h1>
            <h2 className='mb-4 text-dark'>{position}</h2>
            <div className='d-flex justify-content-center gap-3'>
              {github && <Button
                variant='primary'
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <FontAwesomeIcon icon={faGithub} size={iconSize} />
              </Button>}
              {linkedIn && <Button
                variant='primary'
                href={linkedIn}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
              </Button>}
            </div>̵
          </Col>
        </Row>
        {/* Bottom Section */}
        <Row className='justify-content-center'>
          {careerHighlights.map(({ title, message }, index) => (
            <Col key={index} xs={12} sm={8} md={4} className='experience-col'>
              <Card bg='primary' className='text-dark px-2' key={index}>
                <Card.Body>
                  <Row as='h5' className='text-light'>{message.includes('Years') ? totalExperience : capitializeSentence(title)}</Row>
                  <Row>{message}</Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  );
};

export default Home;