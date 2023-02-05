import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
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
const OptionsDiv = styled.div``;
const QuizQuestion = styled.h2`
    color: black;
`;

export default function QuestionAndOptions() {
    return(
        <MainContent>
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