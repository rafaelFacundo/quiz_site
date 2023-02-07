import React, { useState } from "react";
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

export default function QuestionAndOptions({ListOfQuestions}) {
    let currentId = 0;
    const [currentQuestion, setCurrentQuestion] = useState(ListOfQuestions[currentId]);
    const [listOfColor, setListOfColors] = useState(new Array(ListOfQuestions.length).fill('gray'));

    console.log(ListOfQuestions.length)

    console.log(currentQuestion.options)

    return(
        <MainContent>
            <AnswersRecordDiv>
                <AnswersRecordContentDiv>
                    {
                        listOfColor.map((color, index) => {
                            return(
                                <AnswerRecord answerColor={color} key={index} />
                            );
                        })
                    }
                </AnswersRecordContentDiv>
            </AnswersRecordDiv>
            <QuizQuestion>{currentQuestion.question}</QuizQuestion>
            <OptionsDiv>
                {
                    currentQuestion.options.map((option, index) => {
                        return(
                            <AnswerOption
                                onClick={() => {
                                    setCurrentQuestion(ListOfQuestions[currentId+1]);
                                    currentId += 1;
                                }}
                                key={index}
                            >
                                {option.text}
                            </AnswerOption>
                        );
                    })
                }
            </OptionsDiv>
        </MainContent>
    );
}