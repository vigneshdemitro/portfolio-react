import React from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { user } from '../utils/utils';

const About = () => {

  const { about: { skills, title, paragraphs } } = user;

  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <Card className='shadow-sm'>
            <Card.Body>
              <Card.Title as='h2' className='mb-4 text-center text-dark'>
                {title}
              </Card.Title>
              {paragraphs.map((text, index) => (
                <Card.Text key={index} className='text-dark'>{text}</Card.Text>
              ))}

              <hr />

              <div>
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    bg='primary'
                    className='me-2 mb-2 text-light'
                    pill
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;