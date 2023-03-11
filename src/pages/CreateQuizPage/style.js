import styled from "styled-components";

const AnswerOption = styled.input`
    width: 350px;
    height: 50px;
    margin: 5px;
    background-color: ${props => props.selected || "#D9D9D9"};
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
    pointer-events: ${props => props.enabled};
`;
const OptionsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const InputTitles = styled.textarea`
    font-size: 20px;
    width: 90%;
    height: ${props => props.inputHeight || "100px"};
    margin: 5px;
    resize: none;
    border: none;
    border-bottom: 3px solid lightgray;
    &:focus {
        outline: none;
        border-bottom: 1px solid lightgreen;
    };
    pointer-events: ${props => props.enabled};
    
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
    pointer-events: ${props => props.enabled};
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
    bottom: ${props => props.btBottom };
    right: ${props => props.btRight };
    pointer-events: ${props => props.enabled};
`;
const H3 = styled.h3`
    color: black;
`;

export {
    AnswerOption,
    OptionsDiv,
    InputTitles,
    InputsDiv,
    Image,
    FinishQuestionButton,
    H3,
}