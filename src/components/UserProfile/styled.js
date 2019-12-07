import styled from "styled-components";

const Container = styled.div `
    padding-top:20px;
    margin:0 25% 0 25%;
    text-align:left;
    h1{
        font-size:24px;
        padding:10px 0 10px 0;
        
    }
`;
const Nav = styled.div`
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
`
export default {
    Container,
    Nav
};