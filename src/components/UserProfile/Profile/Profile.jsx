import React, { Component } from 'react';
import Styled from "./styled";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      email: this.props.email,
      visible: false,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      erro: "",
      dangerVisibility: false,
      age: this.props.age,
      height: this.props.height,
      weight: this.props.weight,
      firstName: '',
      lastName: ''
    }
  }
  componentDidMount() {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName
    })
  }
  onShowAlert = () => {
    this.setState({
      email: this.props.email,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",

    })

    this.setState({ ...this.state, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ ...this.state, visible: false })
      }, 2000)
    });
  }
  handleUserChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleUserSubmit = (e) => {
    e.preventDefault();
    if (this.state.height == null || this.state.height == undefined || this.state.height === "") {
      this.setState({
        error: "height Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.weight == null || this.state.weight == undefined || this.state.weight === "") {
      this.setState({
        error: "weight Empty",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.age == null || this.state.age == undefined || this.state.age === "") {
      this.setState({
        error: "age Empty",
        dangerVisibility: true,
      })
      return false;
    }
    else {
      this.props.updateUserDetail({ "age": this.state.age, "height": this.state.height, "weight": this.state.weight })
    }
  }
  handleAccountSubmit = (e) => {
    e.preventDefault();
    if (this.state.email == null || this.state.email == undefined || this.state.email === "") {
      this.setState({
        error: "email Empty",
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

  handleAccountChange = (e) => {
    this.setState({
      erro: "",
      dangerVisibility: false,
      [e.target.id]: e.target.value
    })
  }
  componentDidUpdate() {
    if (this.props.password_update_status === true) {
      this.onShowAlert()
      this.props.resetUpdatePasswordFlag();
    }
    if (this.props.UserDetailupdateStatus === true) {
      this.onShowAlert()
      this.props.resetUserDetailUpdateFlag();
    }
    if (this.props.UserDetailupdateStatus === false) {
      this.setState({
        error: this.props.update_password_err.message,
        dangerVisibility: true,
      })
    }
    if (this.props.password_update_status === false) {
      this.setState({
        error: this.props.update_password_err.message,
        dangerVisibility: true,
      })
      try {
        this.props.resetUpdatePasswordFlag();
      }
      catch (err) {
        console.log(err)
      }

    }
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (this.props.account) {
      return (
        <Styled.Container>
          <h1>My Account Settings</h1>
          <Alert show={this.state.visible} key="success" variant="success">
            Password Updated Succesfully
            </Alert>
          <Alert show={this.state.dangerVisibility} key="danger" variant="danger">
            {this.state.error}
          </Alert>
          <Form onSubmit={this.handleAccountSubmit}>
            <Form.Group as={Row} controlId="email">
              <Form.Label column sm="4">
                Email
          </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly value={this.props.email} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="oldPassword">
              <Form.Label column sm="4">
                Current Password
          </Form.Label>
              <Col sm="8">
                <Form.Control type="password" onChange={this.handleAccountChange} placeholder="Old Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="newPassword">
              <Form.Label column sm="4">
                New Password
          </Form.Label>
              <Col sm="8">
                <Form.Control type="password" onChange={this.handleAccountChange} placeholder="New Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="confirmPassword">
              <Form.Label column sm="4">
                Confirm Password
          </Form.Label>
              <Col sm="8">
                <Form.Control type="password" onChange={this.handleAccountChange} placeholder="Confirm Password" />
              </Col>
            </Form.Group>
            <Button className="custom-btn pull-right" variant="primary" type="submit">
              Submit
           </Button>
          </Form>
        </Styled.Container>
      )
    }
    if (this.props.user) {
      return (
        <Styled.Container>
          <h1>My User Settings</h1>
          <Alert show={this.state.visible} key="success" variant="success">
            User Details Updated Succesfully
            </Alert>
          <Alert show={this.state.dangerVisibility} key="danger" variant="danger">
            {this.state.error}
          </Alert>
          <Form onSubmit={this.handleUserSubmit}>
            <Form.Group as={Row} controlId="formFirstName">
              <Form.Label column sm="4">
                First Name
          </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly value={this.state.firstName} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formLastName">
              <Form.Label column sm="4">
                Last Name
          </Form.Label>
              <Col sm="8">
                <Form.Control plaintext readOnly value={this.state.lastName} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="age">
              <Form.Label column sm="4">
                Age
          </Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={this.state.age} onChange={this.handleUserChange.bind(this)} placeholder="Age" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="height">
              <Form.Label column sm="4">
                Height (cm)
          </Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={this.state.height} onChange={this.handleUserChange.bind(this)} placeholder="Height" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="weight">
              <Form.Label column sm="4">
                Weight (kg)
          </Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={this.state.weight} onChange={this.handleUserChange.bind(this)} placeholder="weight" />
              </Col>
            </Form.Group>
            <Button className="custom-btn pull-right" variant="primary" type="submit">
              Submit
           </Button>
          </Form>
        </Styled.Container>)
    }
  }
}
const mapStateToProps = state => {
  return {
    email: state.firebase.auth.email,
    firstName: state.firebase.profile.firstName,
    lastName: state.firebase.profile.lastName,
    height: state.firebase.profile.height,
    age: state.firebase.profile.age,
    weight: state.firebase.profile.weight,
    password_update_status: state.auth.password_update_status,
    update_password_err: state.auth.update_password_err,
    UserDetailupdateStatus: state.user.updateStatus,
    UserDetailupdateError: state.user.error
  };
}
const mapDispatchToProps = dispatch => {
  return {
    // updatePassword: (oldPassword, newPassword, email) => dispatch(actionCreators.updatePassword(oldPassword, newPassword, email)),
    // resetUpdatePasswordFlag: () => dispatch(actionCreators.resetUpdatePasswordFlag()),
    // updateUserDetail: (userDetail) => dispatch(actionCreators.updateUserDetail(userDetail)),
    // //resetUserDetailUpdateFlag: () => dispatch(actionCreators.resetUserDetailUpdateFlag()),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);