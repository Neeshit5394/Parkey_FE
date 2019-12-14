import  styled  from "styled-components";

const SearchBar = styled.input`

     width:100%;
     padding:8px;
     border-radius:5px;
     box-shadow: inset 0px 0px 0px 0px red;
     border:1px solid #cccccc;
     border-width:1px

`;

const suggestionContainer = styled.div`
    position: absolute 
    z-index: 1051 !important;
    width:100%:
    margin:0 30px 0 20px;
    // border:1px solid lightgrey;
    border-top:0px;
    width:95%;
`
;

export default { 
    SearchBar,
    suggestionContainer,
};