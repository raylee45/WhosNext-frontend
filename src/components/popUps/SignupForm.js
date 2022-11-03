import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function SignupForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Confirm Password" required />
          <Form.Control.Feedback type="invalid">
            Please confirm your password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>B-Day</Form.Label>
          <Form.Control type="text" placeholder="00" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 2 digit Day.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>B-Month</Form.Label>
          <Form.Control type="text" placeholder="00" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 2 digit Month.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>B-Year</Form.Label>
          <Form.Control type="text" placeholder="0000" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 4 digit Year.
          </Form.Control.Feedback>
        </Form.Group>
      </Row> */}
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder=" " required />
          <Form.Control.Feedback type="invalid">
            Please choose a Gender.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Preference</Form.Label>
          <Form.Control type="text" placeholder=" " required />
          <Form.Control.Feedback type="invalid">
            Please choose a Preference.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      {/* <Button type="submit">Signup</Button> */}
    </Form>
  );
}

export default SignupForm
