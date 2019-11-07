import  styled  from "styled-components";
import { Modal, Tabs, Tab } from 'react-bootstrap';

const AuthenticationModal = styled.div`
    .modal-body{
        padding-bottom:2px;
    }


`;
const ModalHeader = styled(Modal.Header)`
    
    border-bottom:none;
    padding-bottom:1px;

    .title{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bolder;
    }
`;
const ModalBody = styled(Modal.Body)`

    padding-bottom:2px;
`;

const Logo = styled.span`
    
    font-family: 'Damion', cursive;
    font-weight: normal;
    font-size:150%;
`;

const Footer = styled.div`

    width:100%;  
    text-align:center;
    font-size:15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    .social-media-btn{
        font-size:15px;
    }

`
export default { 
    AuthenticationModal,
    Logo,
    Footer,
    ModalHeader,
    ModalBody


};