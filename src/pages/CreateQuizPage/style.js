import styled from "styled-components";

const MainContent = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
`;
const ContedDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
    
`;
const CreateQuizDiv = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;

const AnswerOption = styled.input`
    width: 350px;
    height: 50px;
    margin: 5px;
    background-color: #D9D9D9;
    border-radius: 0px;
    transition: all 0.3s;
    &:focus{
        outline: none;
        border: 1.5px solid lightgreen;
    }
    font-size: 20px;
    box-sizing: border-box;
    padding: 7px;
    border: none;
`;
const OptionsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const InputQuestion = styled.textarea`
    font-size: 20px;
    width: 90%;
    height: 50px;
    margin: 5px;
    resize: none;
    border: none;
    border-bottom: 3px solid lightgray;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightgreen;
    }
`;
const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 70%;
`;
const Image = styled.img`
    width: 50px;
    height: 60px;
    position: absolute;
    top: ${props => props.Top || "auto"};
    right: ${props => props.Right || "auto"};
    left: ${props => props.Left || "auto"};
    transition: all 0.4s;
    &:hover {
        cursor: pointer;
        transform: scale(1.3);
        
    }
`;
const FinishQuestionButton = styled.button`
    border-radius: 50px;
    margin-top: "15px";
    margin-left:  "0px";
    background-color: lightgray;
    height: "60px";
    width: "300px";
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    position: absolute;
    bottom: 30px;
    right: 15px;
`;

export {
    MainContent,
    ContedDiv,
    CreateQuizDiv,
    AnswerOption,
    OptionsDiv,
    InputQuestion,
    InputsDiv,
    Image,
    FinishQuestionButton
}