import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MainContainer from "./MainContainer.jsx";


const LoginContainer = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return (
      <div>
      {/* this is our Login button */}
        <Button id="loginButton" className="loginButton" color="primary" size="lg" onClick={toggle}>Login</Button>
        
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader size="lg" toggle={toggle}>User Login:</ModalHeader>
            <ModalBody>
              <Form>

                <FormGroup>
                  <Label for="userEmail">Email:</Label>
                  <Input type="email" name="email" id="userEmail" placeholder="Enter email..." />
                  <br/>
              
                  <Label for="userPassword">Password:</Label>
                  <Input type="password" name="password" id="userPassword" placeholder="Enter password..." />
                </FormGroup>

              </Form>
            </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={toggle}>Login</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

         {/* this is our Register button, probably need to put in another component to clean up this page


        <Button id="registerButton" className="registerButton" color="secondary" size="lg" onClick={toggle}>Register</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader size="lg" toggle={toggle}>Register - Please enter your information</ModalHeader>
            <ModalBody>
              <Form>

                <FormGroup>
                  <Label for="userEmail">Email:</Label>
                  <Input type="email" name="email" id="userEmail" placeholder="Enter email..." />
                  <br/>
              
                  <Label for="userPassword">Password:</Label>
                  <Input type="password" name="password" id="userPassword" placeholder="Enter password..." />
                </FormGroup>

              </Form>
            </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}

     
        <MainContainer />
      </div>
    )
  }


export default LoginContainer;