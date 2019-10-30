import React, { Component } from "react";
import { Button, Form} from 'react-bootstrap'
import "../App.css";


class SignIn extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {
       
    }
    render() {
        return(
            <div className="jumbotron signIn-tab">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Text className="signup-password-form-text">
                       At least 8 Characters and alphanumeric
                    </Form.Text>
                    <Button variant="primary"  size="md" type="submit" block>
                    Submit
                    </Button>
                </Form>
                <div className="term-text">By submitting. I accept Parkey's term of use</div>
            </div>
            
        )        
    }
        
}

export default SignIn;