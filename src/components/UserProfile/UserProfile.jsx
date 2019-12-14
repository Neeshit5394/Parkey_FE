import React, { Component } from "react";
import Styled from "./styled";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePassword, resetUpdatePasswordFlag} from "./../../store/actions";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      visible: false,
      error: "",
      dangerVisibility: false
    };
  }
  onShowAlert = () => {
    this.setState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      phoneNumber: null
    });

    this.setState({ ...this.state, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ ...this.state, visible: false });
      }, 2000);
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.oldPassword == null ||
      this.state.oldPassword == undefined ||
      this.state.oldPassword === ""
    ) {
      this.setState({
        error: "oldPassword Empty",
        dangerVisibility: true
      });
      return false;
    }
    if (
      this.state.newPassword == null ||
      this.state.newPassword == undefined ||
      this.state.newPassword === ""
    ) {
      this.setState({
        error: "newPassword Empty",
        dangerVisibility: true
      });
      return false;
    }
    if (
      this.state.confirmPassword == null ||
      this.state.confirmPassword == undefined ||
      this.state.confirmPassword === ""
    ) {
      this.setState({
        error: "confirmPassword Empty",
        dangerVisibility: true
      });
      return false;
    }
    if (this.state.confirmPassword !== this.state.newPassword) {
      this.setState({
        error: "Password does not match ",
        dangerVisibility: true
      });
      return false;
    } else {
      this.props.updatePassword(
        this.state.oldPassword,
        this.state.newPassword,
        this.props.userData.email
      );
    }
  };

  handleChange = e => {
    this.setState({
      error: "",
      dangerVisibility: false,
      [e.target.id]: e.target.value
    });
  };
  componentDidUpdate() {
    if (this.props.password_update_status === true) {
      this.onShowAlert()
      this.props.resetUpdatePasswordFlag();
      this.setState({
        oldPassword: "",
      newPassword: "",
      confirmPassword: "",
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
              <Form.Control
                plaintext
                readOnly
                value={this.props.userData.firstName || ""}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="firstName">
            <Form.Label column sm="4">
              Last Name
            </Form.Label>
            <Col sm="8">
              <Form.Control
                plaintext
                readOnly
                value={this.props.userData.lastName || ""}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="phoneNumber">
            <Form.Label column sm="4">
              Phone Number
            </Form.Label>
            <Col sm="8">
              <Form.Control
                plaintext
                readOnly
                value={this.props.userData.phnumber}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="4">
              Email
            </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly value={this.props.userData.email || ""} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="oldPassword">
            <Form.Label column sm="4">
              Current Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={this.handleChange}
                placeholder="Old Password"
                value= {this.state.oldPassword}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="newPassword">
            <Form.Label column sm="4">
              New Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={this.handleChange}
                placeholder="New Password"
                value={this.state.newPassword}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="confirmPassword">
            <Form.Label column sm="4">
              Confirm Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                onChange={this.handleChange}
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
              />
            </Col>
          </Form.Group>
          <Button
            className="custom-btn pull-right"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Styled.Container>
    );
  }
}
const mapsActionToProps = {
  updatePassword,
  resetUpdatePasswordFlag,
}
const mapStateToProps = state => {
  return {
    userData: state.authState.userData,
    password_update_status: state.authState.password_update_status,
    update_password_err: state.authState.update_password_err,
  };
};

export default connect(mapStateToProps,mapsActionToProps)(UserProfile);
