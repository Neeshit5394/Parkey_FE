import  styled  from "styled-components";

const SearchBar = styled.input`

        border-top-left-radius:25px;
        border-top-right-radius:25px;
        border-bottom-left-radius:${(props) =>(props.suggestionBox ? '0px': '25px')};
        border-bottom-right-radius:${(props) => (props.suggestionBox ? '0px': '25px')};

`;

const suggestionContainer = styled.div`
  
`;

export default { 
    SearchBar,
    suggestionContainer,
};