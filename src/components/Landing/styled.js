import styled from 'styled-components';

const headbanner = styled.div `
    
    background-image:url( ${require("../images/title_banner.png")});
    background-repeat: no-repeat;
    background-size: cover;
    background-color:transparent;
    border-radius:0px;
    color:white;
    min-height:620px;
`;
const centerblock = styled.div`
    
    text-align:center;
    
    h2 {
        font-size: 300%;
        padding:10px;
        font-weight: 400;
        text-shadow:1px 0px ;
        font-family: 'DM Serif Display', serif;
    }
    h3{
        font-size: 150%;
        padding:10px;
        font-family: 'Lexend Deca', sans-serif;
    }
`;
const searchbar = styled.div`
    
    max-width:60%;
    min-width:80px;
    padding:20px;
    
    .search-bar-input {
        padding:15px;
        height: 60px;
        width: 100%;
        color:black!important;
        box-shadow: none;
        border:none;
    }
    
    .search-bar-input:focus{
        box-shadow: none;
        border:none;
      }
`;
const servicecontainer = styled.div`
    
    padding-bottom:100px;
    .operation-line{
        font-weight:bold;
        text-align:center;
        padding:90px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size:30px;
    }
`;
const logo = styled.span`
    
    font-family: 'Damion', cursive;
    font-weight: normal;
    font-size:150%;
`;

const service = styled.span`

    text-align:center;
    color:black;
    
    #rent{
        height:50%;
        width:80%;
        min-width:100px;
        min-height:150px;
    }
    #buy{
        height:50%;
        width:45%;
        min-width:100px;
        min-height:150px;
    }
    .service-heading{
        font-weight:500;
        text-shadow: 0.5px 0.1px ;
        font-family: 'DM Serif Display', serif;
        font-size:150%;
        padding:20px;
    }
    .service-description{
        padding:10px;
    }
    .service-btn{
        background-color:white;
        border-color:grey;
        color:#082937;
    }
    .service-btn:hover, .service-btn:active{
        background-color:#082937;
        border-color:#082937;
        color:white;
    }
`;
const servicecapsule = styled.div`
    
    padding:10px;
    
    .row-content{
        box-shadow:2px 2px 10px 0px;
        padding:30px;
    }
`;
const center = styled.div`
    
    display: flex;
    justify-content: center;
`;
const midnav = styled.div`

    text-align:center;
    font-weight:700;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 120%;
    color:black;
    padding:2%;
    background-color:#E8E8E8;
`;
const footer = styled.div`
    
    text-align:center;
    .footer-desc{
        padding:10px;
    }
    .footer-image{
        width:100%;
    }
`;

export default {
    headbanner, 
    centerblock, 
    searchbar, 
    center,
    logo,
    midnav,
    service,
    servicecapsule,
    servicecontainer,
    footer
};