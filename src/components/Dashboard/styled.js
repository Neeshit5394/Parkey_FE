import styled from "styled-components";

const container = styled.div`
    padding:30px;
    // font-family: 'Comfortaa', cursive;
    .chart{
        box-shadow:1px 0px 5px 0px;
        padding:40px;
    }
    .brown-color{
      background-color:white;
      color:#874F34;
    }
    .box-with-shadow{
        box-shadow:1px 1px 5px 1px;
        padding:5px;
    }
    .grey-color{
        background-color:white;
        color:black;
    }
    .meteric{
        font-size:250%;
        margin:0px;
        text-align:right;
    }
    .content{
        text-align:left;
    }
    .description{
        font-size:125%;
        padding:0px;
        margin:0px;
        text-align:left;
    }
    .display-4{
        font-size:250%;
    }
    .body-stats-desc{
        font-size:50%;
    }
    .prop{
        font-weight:600;
        font-size:100%;
    }
    .value{
        font-weight:600;
        font-size:250%;
    }
    .calorie-img{
        height:50px;
        width:50px;
    }
    .image-container{
        margin:0px;
        padding:0px;
    }
    .desc-line{
        display:block !important;
    }
    .content{
        padding:0 25px 25px 25px;
    }
    .body-stats{
        padding-top:25px;
        text-align:left;
    }
    .box-container{
        box-shadow:2px 1px 5px 0px;
        padding:20px;
        margin:20px 0px 20px 0px;
        min-height:32vh;
    }
    .box-lg{
        min-height:66vh;
    }
    .operations{
        text-align:left;
    }
`
const CalorieMeterLabel = styled.div`
    padding:10px;
    font-family: 'Comfortaa', cursive;
    font-weight:600;
   
`

export default {
    container,
    CalorieMeterLabel
};