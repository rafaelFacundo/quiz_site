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
    };
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

const Text = styled.p`
    color: black;
`
let currentId = 0;

export default function QuestionAndOptions({ListOfQuestions}) {
    let arrayOfInitialColors = new Array(ListOfQuestions.length).fill('gray');
    arrayOfInitialColors[0] = "yellow";
    let [isQuizOver, setIsQuizOver] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(ListOfQuestions[currentId]);
    const [listOfColor, setListOfColors] = useState(arrayOfInitialColors);

    function checkAnswerAndGoNext(indexOfAnswer) {
        let newArray = [...listOfColor];
        
        if (currentQuestion.options[indexOfAnswer].iR === 1) {
            console.log("if")
            console.log(currentQuestion.question)
            console.log(currentId)
            newArray[currentId] = 'green';
        }else {
            console.log("else")
            console.log(currentQuestion.question)
            console.log(currentId)
            newArray[currentId] = 'red';
        }
        currentId += 1;
        
        
        if (currentId < ListOfQuestions.length) {
            newArray[currentId] = "yellow";
            setListOfColors(newArray);
            console.log("if" + currentId)
            setCurrentQuestion(ListOfQuestions[currentId]);
        }else {

            console.log("else" + currentId)
            setListOfColors(newArray);
            setIsQuizOver(!isQuizOver);
        }
    }

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
                    isQuizOver ? <Text>the game is end</Text> :(currentQuestion.options.map((option, index) => {
                        return(
                            <AnswerOption
                                onClick={() => {
                                    checkAnswerAndGoNext(index);
                                }}
                                key={index}
                            >
                                {option.text}
                            </AnswerOption>
                        );
                    }))
                }
            </OptionsDiv>
        </MainContent>
    );
}