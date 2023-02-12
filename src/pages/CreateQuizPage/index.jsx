import React, { useState } from "react";
import Header from "../../components/Header";
import RightArrow from "../../assets/right_arrow.png";
import LeftArrow from "../../assets/left_arrow.png";
import {
    MainContent,
    ContedDiv,
    CreateQuizDiv,
    AnswerOption,
    OptionsDiv,
    InputQuestion,
    InputsDiv,
    Image,
    FinishQuestionButton
} from "./style";

export default function CreateQuizPage() {

    /* 
        {   
            questions_image: null,
            question: 'Who is the creator of naruto',
            options: [
                {text: 'Masashi kishimoto', iR: 1},
                {text: 'Akira toriama', iR: 0},
                {text: 'junji ito', iR: 0},
                {text: 'hajime yatate', iR: 0},
            ]
        },
    */

    const [listOfQuestions, setListOfQuestions] = useState([{}]);
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        options: [
            {text: "", iR: 0},
            {text: "", iR: 0},
            {text: "", iR: 0},
            {text: "", iR: 0},
        ]
    });
    const [currentId, SetCurrentId] = useState(0);
    
    function mountTheQuestion(questionTitle, rightAnswer, secondOption, thirdOption, fourthOption) {
        const newQuestion = {
            questions_image: null,
            question: questionTitle,
            options: [
                {text: rightAnswer, iR:1},
                {text: secondOption, iR:0},
                {text: thirdOption, iR:0},
                {text: fourthOption, iR:0}
            ]
        };
        let newListOfQuestion = [...listOfQuestions];
        newListOfQuestion.push(newQuestion);
        setListOfQuestions(newListOfQuestion);
    };

    function putValueOfOption(text,index) {
        let newObject = {...currentQuestion};
        newObject.options[index] = {text, isR: 0};
        setCurrentQuestion(newObject);
    }
    
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <Image src={LeftArrow} Top={"50vh"} Left={"30px"} enabled={(currentId > 0) ? "all" : "none"}/>
                <Image src={RightArrow} Top={"50vh"} Right={"30px"} enabled={(currentId < listOfQuestions.length) ? "all" : "none"}/>
                <CreateQuizDiv>
                    <InputsDiv>
                        <InputQuestion 
                            placeholder="TYPE THE QUESTION HERE"
                            maxLength={200}
                            onChange={(e) => {
                                let newObject = {...currentQuestion};
                                newObject.question = (e.target.value);
                                setCurrentQuestion(newObject);
                            }}
                        />
                        <OptionsDiv>
                            <AnswerOption
                                placeholder="RIGHT ANSWER HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    putValueOfOption(e.target.value,0);
                                }}
                            />
                            <AnswerOption
                                placeholder="SECOND OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    putValueOfOption(e.target.value,1);
                                }}
                            />
                            <AnswerOption
                                placeholder="THIRD OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    putValueOfOption(e.target.value,2);
                                }}
                            />
                            <AnswerOption
                                placeholder="FOURTH OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    putValueOfOption(e.target.value,3);
                                }}
                            />
                        </OptionsDiv>
                    </InputsDiv>
                </CreateQuizDiv>
                <FinishQuestionButton
                    onClick={() => {
                        console.log(currentQuestion)
                    }}
                >FINISH QUESTION</FinishQuestionButton>
            </ContedDiv>
        </MainContent>
    );
}