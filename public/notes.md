    <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>

    <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>How do you identify</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>
          {/* <Form.Control type="text" placeholder="Email" required /> */}
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>B-Year</Form.Label>
          <Form.Control type="text" placeholder="0000" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 4 digit Year.
          </Form.Control.Feedback>
        </Form.Group>