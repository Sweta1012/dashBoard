<Form>
        <Row form>
        <Col md={6}>
            <FormGroup>
            <Label for="fname">First Name</Label>
            <Input type="text" name="fname" id="fname" placeholder="First Name" />
            </FormGroup>
        </Col>
        <Col md={6}>
            <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" name="lname" id="lname" placeholder="Last Name" />
            </FormGroup>
        </Col>
        </Row>
        <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
        <Label for="contact">Phone</Label>
        <Input type="text" name="contact" id="contact" placeholder="Mobile Number"/>
        </FormGroup>
        <Row form>
        <Col md={6}>
            <FormGroup>
            <Label for="education">Education</Label>
            <Input type="text" name="education" id="education" placeholder="Highest Level of Education"/>
            </FormGroup>
        </Col>
        <Col md={4}>
            <FormGroup>
            <Label for="workStatus">Work Status</Label>
                <Input type="select" name="workStatus" id="workStatus">
                    <option value="GC">GC</option>
                    <option value="H1B">H1B</option>
                    <option value="OPT">OPT</option>
                    <option value="Other">Other</option>
                </Input>
            </FormGroup>
        </Col>
        <Col md={2}>
            <FormGroup>
            <Label for="otherStatus">please specify if other:</Label>
            {this.state.workStatus === 'other' ? <input type="text" id="otherStatus" name="otherStatus" placeholder="If other please specify" ref={(input) => {this.otherStatus = input}}></input> : null }
            </FormGroup>  
        </Col>
        </Row>

        <button type="submit" id="register" name="register" onClick={this.register}>Register</button>
</Form>