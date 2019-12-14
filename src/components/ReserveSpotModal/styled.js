import  styled  from "styled-components";
import { Modal, Tabs, Tab } from 'react-bootstrap';

const AuthenticationModal = styled.div`
    .modal-body{
        padding-bottom:2px;
    }


`;
const ModalHeader = styled(Modal.Header)`
    
    
    padding-bottom:1px;
    color:#082937;
    .title{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bolder;
    }
    .heading-1{
        font-size:30px !important;
        font-weight: 400;
        
    }
    .heading-2{
        font-size:20px !important;
    }
`;
const ModalBody = styled(Modal.Body)`

    color:#082937;
    padding:8px;
    .heading-3{
        font-size:18px;
    }
    .termsCondition{
     
        font-size:10px;
    }
    .spot-available-time-box{

        border:2px solid black;
        color:#082937;
        border-radius:5px;
        border-color:#082937;

    }
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
    .btn{
        background-color:#082937;
        color:white;
        border-color: #082937;
    }
   

`
export default { 
    AuthenticationModal,
    Logo,
    Footer,
    ModalHeader,
    ModalBody


};