import React from 'react';
import { user } from '../utils/utils';
import { Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { faCode, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAws, faNode, faReact, faPython } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const icons = {
        'angular': faAngular,
        'code': faCode,
        'cloud': faCloud,
        'react': faReact,
        'node': faNode,
        'aws': faAws,
        'python': faPython,
    }
    const sortedSkills = [...user.skills].sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) {
            return a.sortOrder - b.sortOrder;
        }
        return a.name.localeCompare(b.name);
    })
    return (
        <Container className="my-4">
            <Card >
                <Card.Title as='h4' className='text-center mt-4 mb-4 text-dark'>Technical Skills</Card.Title>
                <Row >
                    {sortedSkills.map((skill) => (
                        <Col key={skill.name} xs={12} md={6} className='mb-4'>
                            <Card.Body>
                                <Card.Title className="h4 d-flex align-items-center mb-3 text-dark">
                                    <FontAwesomeIcon
                                        icon={icons[skill.icon] || faCode}
                                        size='sm'
                                        className='me-2' />
                                    {skill.name}
                                </Card.Title>
                                <ProgressBar
                                    now={skill.level}
                                    animated
                                    striped
                                    variant="info"
                                >
                                </ProgressBar>
                            </Card.Body>
                        </Col>
                    ))}
                </Row>
            </Card>
        </Container>
    );
};

export default Skills

