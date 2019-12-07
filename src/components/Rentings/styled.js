import  styled  from "styled-components";

const Container = styled.div`
    padding:20px
    .jumbotron{
        padding:5px;
        background-color:white;
    }
    .card-view{
        margin-bottom:25px;
    }
    .card{
        color:white;
        font-family: 'Comfortaa', cursive;
        font-weight:600;
    }
    .breakfast-card{
        background-image:url(${require("../../images/flyer1.jpg")});
    }
    .cal-display{
        font-family: 'Comfortaa', cursive;
    }
    .cal-value{
        font-weight:600;
    }
    .metric-val{
        font-size:15vh;
    }
    .metric-unit{
        font-size:80%;
    }
    .cal-desc{
        font-size:250%:
    }
    
    .service-btn{
        background-color:#874F34;
        border-color:transparent;
        font-family: 'Comfortaa', cursive;
    }
    .service-btn:hover, .service-btn:active{
        background-color:#7B3942;
        border-color:transparent;
        font-family: 'Comfortaa', cursive;
    }

`;

export default { Container };