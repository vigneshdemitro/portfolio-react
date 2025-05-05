import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { user } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const { contact: { email, linkedIn, resumeLink } } = user;
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can integrate with EmailJS, Formspree, or backend API here
        // console.log('Form submitted:', form);
        // alert('Your message has been sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 text-dark">Get in touch</h2>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="mb-4 p-4">
                        <Card.Body>
                            <p>
                                <FontAwesomeIcon icon={faLinkedin} className="me-2 text-primary" />
                                <a href={linkedIn} target='_blank' rel="noopener noreferrer">
                                    {linkedIn.split('www.')[1]}
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                                <a href={`mailto:${email}`} target='_blank' rel="noopener noreferrer">
                                    {email}
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faFile} className="me-2 text-primary" />
                                <a href={resumeLink} target='_blank' rel="noopener noreferrer">
                                    Download Resume
                                </a>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="p-4">
                        <Card.Body>
                            <Card.Title className='text-primary'>Send a Message</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className='text-dark'>Name</Form.Label>
                                    <Form.Control
                                        className='text-dark'
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className='text-dark'>Email</Form.Label>
                                    <Form.Control
                                        className='text-dark'
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label className='text-dark'>Message</Form.Label>
                                    <Form.Control
                                        className='text-dark'
                                        as="textarea"
                                        rows={4}
                                        placeholder="Type your message here"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
