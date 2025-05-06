import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { formatDateRange, getCompanyExperience, user } from '../utils/utils';

const ExperienceCard = ({ companyName, positions, skills }) => (
  <Card className='mb-4 shadow-sm text-dark'>
    <Card.Body>

      <div className='d-flex justify-content-between align-items-center mb-2'>
        <Card.Title as='h4' className='mb-0 text-primary'>{companyName}</Card.Title>
        <Badge bg='primary' className='me-2 mb-2 text-dark'>{getCompanyExperience(positions)}</Badge>
      </div>
      {positions && positions.length && positions.map((position, index) => (
        <div key={index} className='mb-3'>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <h5 className='mb-1'>{position.title}</h5>
            <h6 className='text-danger fw-bold'>{formatDateRange({ startDate: position.startDate, endDate: position.endDate })}</h6>
          </div>
          <p className='mb-2'>{position.description}</p>
        </div>
      ))}

      {skills && skills.length && (
        <div className='mt-2'>
          {skills.map((tech, index) => (
            <Badge key={index} bg='secondary' className='me-2 mb-2 text-dark text-decoration-underline'>{tech}</Badge>
          ))}
        </div>
      )}
    </Card.Body>
  </Card>
);

const Experience = () => (
  <Container className='my-5'>
    <Row className='justify-content-center mb-4'>
      <Col xs={12} md={10}>
        <h2 className='text-center mb-4 text-dark'>Professional Experience</h2>
        {user.experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            positions={experience.positions}
            skills={experience.skills}
          />
        ))}
      </Col>
    </Row>
  </Container>
);

export default Experience;
