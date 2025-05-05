import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { user } from '../utils/utils';

const ExperienceCard = ({ companyName, positions, techStacks }) => (
  <Card className="mb-4 shadow-sm text-dark">
    <Card.Body>

      {positions.map((position, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            {(index === 0) &&
              <>
                <Card.Title as="h4" className="mb-0 text-primary">{companyName}</Card.Title>
                <small className="text-dark">{position.year}</small>
              </>
            }
          </div>
          <h5 className="mb-1">{position.title}</h5>
          <p className="mb-2">{position.description}</p>
        </div>
      ))}

      {techStacks && techStacks.length > 0 && (
        <div className="mt-2">
          {techStacks.map((tech, index) => (
            <Badge key={index} bg="primary" className="me-2 mb-2 text-dark">{tech}</Badge>
          ))}
        </div>
      )}
    </Card.Body>
  </Card>
);

const Experience = () => (
  <Container className="my-5">
    <Row className="justify-content-center mb-4">
      <Col xs={12} md={10}>
        <h2 className="text-center mb-4 text-dark">Professional Experience</h2>
        {user.experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            positions={experience.positions}
            techStacks={experience.techStacks}
          />
        ))}
      </Col>
    </Row>
  </Container>
);

export default Experience;
