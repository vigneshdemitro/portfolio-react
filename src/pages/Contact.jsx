import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, ToastContainer, Toast } from 'react-bootstrap';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { user } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const initialValue = { name: '', email: '', message: '' };

const Contact = () => {
    const { contact: { email, linkedIn, resumeLink } } = user;
    const [form, setForm] = useState(initialValue);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(form).toString()
        })
            .then(() => {
                setForm(initialValue);
                setShowToast(true);
            })
            .catch(error => alert(error));
    };

    return (
        <Container className='my-5'>
            <h2 className='text-center mb-4 text-dark'>Get in touch</h2>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Card className='mb-4 p-4'>
                        <Card.Body>
                            {linkedIn && <p>
                                <FontAwesomeIcon icon={faLinkedin} className='me-2 text-primary' />
                                <a href={linkedIn} target='_blank' rel='noopener noreferrer'>
                                    {linkedIn.split('www.')[1]}
                                </a>
                            </p>}
                            {email && <p>
                                <FontAwesomeIcon icon={faEnvelope} className='me-2 text-primary' />
                                <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
                                    {email}
                                </a>
                            </p>}
                            {resumeLink && <p>
                                <FontAwesomeIcon icon={faFile} className='me-2 text-primary' />
                                <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
                                    Download Resume
                                </a>
                            </p>}
                        </Card.Body>
                    </Card>

                    <Card className='p-4'>
                        <Card.Body>
                            <Card.Title className='text-primary'>Send a Message</Card.Title>
                            <form
                                name='contact'
                                method='POST'
                                data-netlify='true'
                                netlify-honeypot="bot-field"
                                netlify
                                onSubmit={handleSubmit}
                            >

                                <input type='hidden' name='form-name' value='contact' />
                                <div hidden>
                                    <label>Don't fill this out: <input name="bot-field" /></label>
                                </div>
                                <div className='mb-3'>
                                    <label for="name" className='text-dark form-label'>Name</label>
                                    <input
                                        className='text-dark form-control'
                                        type='text'
                                        placeholder='Enter your name'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label for="email" className='text-dark form-label'>Email</label>
                                    <input
                                        className='text-dark form-control'
                                        type='email'
                                        placeholder='Enter your email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label for='message' className='text-dark form-label'>Message</label>
                                    <textarea
                                        className='text-dark form-control'
                                        rows={4}
                                        placeholder='Type your message here'
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Button variant='primary' type='submit'>
                                    Send Message
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer position="top-center" className="p-3">
                <Toast bg="success" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto text-light">Success</strong>
                    </Toast.Header>
                    <Toast.Body className="text-light">Message sent successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default Contact;
