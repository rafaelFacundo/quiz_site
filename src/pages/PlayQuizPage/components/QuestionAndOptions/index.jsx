import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`
const AnswerOption = styled.button`
    width: 350px;
    height: 50px;
    margin: 5px;
    background-color: #D9D9D9;
    border-radius: 0px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
        background-color: #696969;
    }
`;
const OptionsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const QuizQuestion = styled.h2`
    color: black;
`;
const AnswersRecordDiv = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`;
const AnswersRecordContentDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const AnswerRecord = styled.div`
    background-color: ${props => props.answerColor || "gray"};
    width: 100px;
    height: 10px;
    margin-right: 5px;
`;

export default function QuestionAndOptions() {
    return(
        <MainContent>
            <AnswersRecordDiv>
                <AnswersRecordContentDiv>
                    <AnswerRecord answerColor={"red"} />
                    <AnswerRecord answerColor={"green"} />
                    <AnswerRecord answerColor={"yellow"} />
                    <AnswerRecord />
                </AnswersRecordContentDiv>
            </AnswersRecordDiv>
            <QuizQuestion>Olá mundo</QuizQuestion>
            <OptionsDiv>
                <AnswerOption>opção 1</AnswerOption>
                <AnswerOption>opção 2</AnswerOption>
                <AnswerOption>opção 3</AnswerOption>
                <AnswerOption>opção 4</AnswerOption>
            </OptionsDiv>
        </MainContent>
    );
}