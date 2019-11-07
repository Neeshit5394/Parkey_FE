import styled  from "styled-components";
import { Form } from 'react-bootstrap'

const AuthenticationForm = styled.div`
    padding: 20px 0px 0px 0px;
    background-color:transparent;
    margin-bottom:0px;
`;

const FormText = styled(Form.Text)`
    padding-left:5px;
    margin-bottom:15px;     
    color:lightgrey;
`;

const ConfirmationText = styled.div`

    text-align:center;
    margin:10px 0px 10px 0px ;
    font-size:13px;
`;

export default { 
    AuthenticationForm,
    FormText,
    ConfirmationText 
};