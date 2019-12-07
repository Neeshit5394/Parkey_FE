import React, { Component } from 'react';
import Styled from "./styled";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      email: "",
      phoneNumber:null,
      firstName:"",
      lastName:"",
      visible: false,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      erro: "",
      dangerVisibility: false,
    }
  }
  componentDidMount() {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
    })
  }
  onShowAlert = () => {
    this.setState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      phoneNumber:null,
    })

    this.setState({ ...this.state, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ ...this.state, visible: false })
      }, 2000)
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.phoneNumber == null || this.state.phoneNumber == undefined || this.state.phoneNumber === "") {
      this.setState({
        error: "Phone Number Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.oldPassword == null || this.state.oldPassword == undefined || this.state.oldPassword === "") {
      this.setState({
        error: "oldPassword Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.newPassword == null || this.state.newPassword == undefined || this.state.newPassword === "") {
      this.setState({
        error: "newPassword Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.confirmPassword == null || this.state.confirmPassword == undefined || this.state.confirmPassword === "") {
      this.setState({
        error: "confirmPassword Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.confirmPassword !== this.state.newPassword) {
      this.setState({
        error: "Password does not match ",
        dangerVisibility: true,
      })
      return false;
    }
    else {
      this.props.updatePassword(this.state.oldPassword, this.state.newPassword, this.state.email)
    }
  }

  handleChange = (e) => {
    this.setState({
      erro: "",
      dangerVisibility: false,
      [e.target.id]: e.target.value
    })
  }
  componentDidUpdate() {
    
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.Container>
        <h1>My Account Settings</h1>
        <Alert show={this.state.visible} key="success" variant="success">
          Password Updated Succesfully
            </Alert>
        <Alert show={this.state.dangerVisibility} key="danger" variant="danger">
          {this.state.error}  
        </Alert>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="firstName">
            <Form.Label column sm="4">
              First Name
                </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly value={this.state.firstName || "Amit"} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="firstName">
            <Form.Label column sm="4">
              Last Name
              </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly value={this.state.lastName || "Vadnere"} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="firstName">
            <Form.Label column sm="4">
              Phone Number
              </Form.Label>
            <Col sm="8">
              <Form.Control type="number" onChange={this.handleChange} placeholder="Phone Number" value={this.state.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="4">
              Email
          </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly value={this.state.email || "avadnere@stevens.edu"} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="oldPassword">
            <Form.Label column sm="4">
              Current Password
          </Form.Label>
            <Col sm="8">
              <Form.Control type="password" onChange={this.handleChange} placeholder="Old Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="newPassword">
            <Form.Label column sm="4">
              New Password
          </Form.Label>
            <Col sm="8">
              <Form.Control type="password" onChange={this.handleChange} placeholder="New Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="confirmPassword">
            <Form.Label column sm="4">
              Confirm Password
          </Form.Label>
            <Col sm="8">
              <Form.Control type="password" onChange={this.handleChange} placeholder="Confirm Password" />
            </Col>
          </Form.Group>
          <Button className="custom-btn pull-right" variant="primary" type="submit">
            Submit
           </Button>
        </Form>
      </Styled.Container>
    )
  }
}


export default UserProfile;