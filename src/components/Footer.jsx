import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { user } from '../utils/utils';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconSize = 'lg'

  return (
    <footer className='bg-dark text-white py-4'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs={12} md={6} className='mb-3 mb-md-0'>
            <h5 className='text-primary'>{user.name}</h5>
            <p>{user.position}</p>
          </Col>
          {/* Social links */}
          <Col xs={12} md={6} className='d-flex justify-content-start justify-content-md-end gap-1'>
            <Button
              variant='link'
              href='https://github.com/vigneshdemitro'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FontAwesomeIcon icon={faGithub} size={iconSize}/>
            </Button>
            <Button
              variant='link'
              href='https://www.linkedin.com/in/vigneshwarpasupathi'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} size={iconSize}/>
            </Button>
            <Button
              variant='link'
              href='mailto:vigneshdemitro@gmail.com'
              aria-label='Email'
            >
              <FontAwesomeIcon icon={faEnvelope} size={iconSize}/>
            </Button>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className='mt-3'>
          <Col className='text-center'>
            <p>&copy; {currentYear} Vigneshwar Pasupathi. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;