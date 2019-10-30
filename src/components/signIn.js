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
                    <Button variant="primary"  size="md" type="submit" block>
                    Submit
                    </Button>
                </Form>
                <div className="form-end-text">Forget your Password?</div>
            </div>
            
        )        
    }
        
}

export default SignIn;