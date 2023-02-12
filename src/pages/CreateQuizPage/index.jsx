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
    FinishQuestionButton,
    H3
} from "./style";

const currentId = -1;
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

    const [listOfQuestions, setListOfQuestions] = useState([]);
    const [isAllFiled, setIsAllFiled] = useState(false);
    const [isQuestionDone, setIsQuestionDone] = useState(false);
    const [rightOptionCurrentQuestion, setRightOption] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        isDone: false,
        options: [
            {text: "", iR: 0},
            {text: "", iR: 0},
            {text: "", iR: 0},
            {text: "", iR: 0},
        ]
    });
    


    function mountQuestion(text,index) {
        setIsQuestionDone(false);
        setIsAllFiled(false);
        setRightOption(-1);
        let newObject = {...currentQuestion};
        let numberOfOptionsFiled = 0;
        if (index < 4){
            newObject.options[index] = {text, isR: 0};
        }else {
            newObject.question = text;
        }
        setCurrentQuestion(newObject);
        newObject.options.forEach(option => {
            if(option.text.length > 0)
                numberOfOptionsFiled += 1;
        });
        if (newObject.question.length > 0 && numberOfOptionsFiled == 4)
            setIsAllFiled(true);
    }

    function saveQuestionAndNext() {
        const questionToPush = {...currentQuestion}
        questionToPush.options[rightOptionCurrentQuestion].iR = 1;
        questionToPush.isDone = true;
        listOfQuestions.push(questionToPush);
        console.log(listOfQuestions);
        setCurrentQuestion({
            question: "",
            isDone: false,
            options: [
                {text: "", iR: 0},
                {text: "", iR: 0},
                {text: "", iR: 0},
                {text: "", iR: 0},
            ]
        });
        setRightOption(-1);
        setIsAllFiled(false);
    };

    const [teste, setTeste] = useState("")
    
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <Image src={LeftArrow} Top={"50vh"} Left={"30px"} enabled={(currentId > 0) ? "all" : "none"}/>
                <Image src={RightArrow} Top={"50vh"} Right={"30px"} enabled={(currentId < listOfQuestions.length && currentId > -1) ? "all" : "none"}/>
                <CreateQuizDiv>
                    <InputsDiv>
                        <InputQuestion
                            value={currentQuestion.question}
                            placeholder="TYPE THE QUESTION HERE"
                            maxLength={200}
                            onChange={(e) => {mountQuestion(e.target.value, 4); setTeste(e.target.value)}}
                        />
                        <OptionsDiv>
                            <AnswerOption
                                value={currentQuestion.options[0].text}
                                selected={(rightOptionCurrentQuestion == 0) && "green"}
                                placeholder="FIRST OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    mountQuestion(e.target.value,0);
                                }}
                                onClick={() => { isAllFiled && setRightOption(0); setIsQuestionDone(true)}}
                                
                            />
                            <AnswerOption
                                value={currentQuestion.options[1].text}
                                selected={(rightOptionCurrentQuestion == 1) && "green"}
                                placeholder="SECOND OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    mountQuestion(e.target.value,1);
                                }}
                                onClick={() => {isAllFiled && setRightOption(1); setIsQuestionDone(true)}}
                            />
                            <AnswerOption
                                value={currentQuestion.options[2].text}
                                selected={(rightOptionCurrentQuestion == 2) && "green"}
                                placeholder="THIRD OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    mountQuestion(e.target.value,2);
                                }}
                                onClick={() => {isAllFiled && setRightOption(2); setIsQuestionDone(true)}}
                            />
                            <AnswerOption
                                value={currentQuestion.options[3].text}
                                selected={(rightOptionCurrentQuestion == 3) && "green"}
                                placeholder="FOURTH OPTION HERE"
                                maxLength={60}
                                onChange={(e) => {
                                    mountQuestion(e.target.value,3);
                                }}
                                onClick={() => {isAllFiled && setRightOption(3); setIsQuestionDone(true)}}
                            />
                        </OptionsDiv>
                    </InputsDiv>
                    {isAllFiled && <H3>select the options that is the right answer!</H3>}
                </CreateQuizDiv>
                
                <FinishQuestionButton
                    onClick={() => { isQuestionDone && saveQuestionAndNext();}}
                >FINISH AND ADD QUESTION</FinishQuestionButton>
            </ContedDiv>
        </MainContent>
    );
}