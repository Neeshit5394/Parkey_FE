import  styled  from "styled-components";

const Wrapper = styled.div`
    padding:0px;
    overflow: hidden;
    background-color:transparent;
    margin:0px;
    border-radius:0px;
`;

const MenuWrapper = styled.div`
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding:10px;
`

const LocationSearchBar = styled.div`
    
    margin:0px 15px 0px 15px;
    border:1px solid #082937;
    border-radius:5px;
    padding:0px;

    .search-bar-input{
        height:100%;
        width:100%;
        margin:0px;
        padding:7px;
        border:none;
    }
`

const MenuBtn = styled.div`
    
    padding:0px;
    margin:0px 15px 0px 15px;

    .btn{
        margin:0px;
        width:100%;
        background-color:white;
        color:#082937;
        border-color: #082937;
    }
    .btn:hover{
        margin:0px;
        width:100%;
        background-color:#082937;
        color:white;
        border-color: #082937;
    }
`;

const MapContainer = styled.div`
    map{
        margin:0px;
        padding:10px;
    }
    
`;
const Parkings = styled.div`

    margin:0px;
    height:78vh;
    overflow-y:scroll;
    overflow-x:hidden;
    padding-top:15px;
`;
export default { 
    Wrapper,
    MenuWrapper,
    LocationSearchBar,
    MenuBtn,
    MapContainer,
    Parkings
 };