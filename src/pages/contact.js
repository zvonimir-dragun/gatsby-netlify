import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from 'react-bootstrap'

const Contact = () => (
  <PrimaryLayout column="col-10">
        <div className="pt-5">
          <h1>Contact Us</h1>
          <Form className="pt-3">
            <Form.Group controlId="contactForm.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="your@email.com" />
            </Form.Group>
            <Form.Group controlId="contactForm.Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="message subject" />
            </Form.Group>
            <Form.Group controlId="contactForm.Message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="contactForm.Submit">
              <Button>Submit</Button>
            </Form.Group>
          </Form>
        </div>
  </PrimaryLayout>
)

export default Contact;
