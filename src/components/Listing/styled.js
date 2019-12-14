import  styled  from "styled-components";

const Container = styled.div`
    padding:20px;
    text-align:left;
    h2{
        font-size:28px;
        font-weight:600;
    }
    .custom-primary-btn{
        background-color:#874F34;
        border-color:#874F34;
    }
    .pull-right{
        text-align:right;
        Button{
            margin:5px;
        }
        .primary{
            background-color:#874F34;
        }
        .secondary{
            background-color:grey;
        }
    }
    .listing-part{
        margin-bottom: 50px;
    }
   
`
export default { Container };