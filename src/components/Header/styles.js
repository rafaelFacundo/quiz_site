import styled from "styled-components";

const MainContent = styled.div`
    background-color: #D9D9D9;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 2px solid lightgreen;
`
const ContentDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`
const UserAndButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const CreateQuizButton = styled.button`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-right: 20px;
    * {
        text-decoration: none;
    }
`
const ButtonSearchDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const SearchInput = styled.input`
    width: 500px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid gray;
    padding-right: 40px;
    padding-left: 5px;
    &:focus {
        outline: none;
    }
`
const InputIcon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 6px;
    right: 5px;
    
`


export {
    MainContent,
    ButtonSearchDiv,
    UserAndButtonDiv,
    CreateQuizButton,
    SearchInput,
    ContentDiv,
    InputIcon
}