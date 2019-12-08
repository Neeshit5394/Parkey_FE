import  styled  from "styled-components";

const SearchBar = styled.input`

        border-top-left-radius:25px;
        border-top-right-radius:25px;
        border-bottom-left-radius:${(props) =>(props.suggestionBox ? '0px': '25px')};
        border-bottom-right-radius:${(props) => (props.suggestionBox ? '0px': '25px')};
      

`;

const suggestionContainer = styled.div`
    position: absolute 
    z-index: 1051 !important;
   
    //margin:0 30px 0 20px;
    width:54.5%;
`
;

export default { 
    SearchBar,
    suggestionContainer,
};