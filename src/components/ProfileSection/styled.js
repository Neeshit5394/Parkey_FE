import styled from "styled-components";

const SubNav = styled.div `
    padding:5px;
    border-top:1px solid lightgrey;
    border-bottom:1px solid lightgrey;
    font-family: 'Comfortaa', cursive;
   .nav-link{
       color:grey;
   }
   .active{
        color:black;
        font-weight:600;
    }
   .nav-link:hover{
        color:black;
    }
    
`;
const footer = styled.div `
    
    text-align:center;
    .footer-desc{
        padding:10px;
    }
    .footer-image{
        width:100%;
    }
`;
export default {
    SubNav,
    footer
};