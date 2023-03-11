import React, { useState } from "react";
import Header from "../../components/Header";
import RightArrow from "../../assets/right_arrow.png";
import LeftArrow from "../../assets/left_arrow.png";
import {
    MainContent,
    ContentsSquare,
    ContedDiv,
    DivToManageDisplay
} from "../../components/styles";
import {
    AnswerOption,
    OptionsDiv,
    InputTitles,
    InputsDiv,
    Image,
    FinishQuestionButton,
    H3,
} from "./style";

let currentId = -1;
export default function CreateQuizPage() {
    /* 
        status = 0 -> in progress
        status = 1 -> done, but not added
        status = 2 -> done and added
    */
    const questionPattern = {
        question: "",
        status: 0,
        options: [
            {text: "", iR: false},
            {text: "", iR: false},
            {text: "", iR: false},
            {text: "", iR: false},
        ]
    };
    const [listOfQuestions, setListOfQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(questionPattern);
    const [quizTitle, SetQuizTitle] = useState("");
    
    function mountQuiz() {
        const newQuiz =  {
            title: quizTitle,
            number_of_questions: listOfQuestions.length,
            quiz_cover: null,
            number_of_players: 0,
            questions: listOfQuestions
        }
        console.log(newQuiz)
    }

    function mountQuestion(text,index) {
        let newObject = {...currentQuestion};
        let numberOfOptionsFiled = 0;
        if (index < 4){
            newObject.options[index] = {text, isR: false};
        }else {
            newObject.question = text;
        }
        newObject.options.forEach(option => {
            if(option.text.length > 0)
                numberOfOptionsFiled += 1;
        });
        if (newObject.question.length > 0 && numberOfOptionsFiled == 4){
            newObject.status = 1;
        }
        setCurrentQuestion(newObject);
    }

    function saveQuestionAndNext() {
        const questionToPush = {...currentQuestion}
        questionToPush.status = 2;
        listOfQuestions.push(questionToPush);
        console.log(listOfQuestions);
        setCurrentQuestion(questionPattern);
        if (currentId == -1) {
            currentId += 2;
        }else{
            currentId += 1;
        }
    };

    function navigateThroughTheQuestions(numberToAdd) {
        currentId += numberToAdd;
        if (currentId >= listOfQuestions.length) {
            setCurrentQuestion(questionPattern);
        }else {
            setCurrentQuestion(listOfQuestions[currentId])
        }
    }

    function selectTheRightOPtion(index) {
        let newObjectQuestion = {...currentQuestion};
        newObjectQuestion.options.map((option)=>{option.iR = false});
        newObjectQuestion.options[index].iR = true;
        setCurrentQuestion(newObjectQuestion);
    }
    
    return(
        <MainContent
            contentDisplay={"flex"}
            flexDirection={"column"}
        >
            <Header />
            <ContedDiv>
                <DivToManageDisplay
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    boxSizing={"border-box"}
                    width={"100%"}
                    height={"100%"}
                >
                    <Image
                        src={LeftArrow}
                        Top={"50vh"}
                        Left={"30px"}
                        enabled={(currentId > 0) ? "all" : "none"}
                        onClick={() => {navigateThroughTheQuestions(-1)}}
                    />
                    <Image
                        src={RightArrow}
                        Top={"50vh"} Right={"30px"}
                        enabled={(currentId < listOfQuestions.length && currentId > -1) ? "all" : "none"}
                        onClick={() => {navigateThroughTheQuestions(+1)}}  
                    />
                    <ContentsSquare contentHeight={"100px"}>
                        <DivToManageDisplay
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-around"}
                            boxSizing={"border-box"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <InputTitles
                                inputHeight={"80px"}
                                value={quizTitle}
                                placeholder="TYPE THE TITLE OF THE QUIZ HERE"
                                maxLength={150}
                                onChange={(e) => {SetQuizTitle(e.target.value);}}
                                enabled={"all"}
                            />
                        </DivToManageDisplay>
                    </ContentsSquare>
                    <ContentsSquare contentHeight={"300px"}>
                        <InputsDiv>
                            <InputTitles
                                value={currentQuestion.question}
                                placeholder="TYPE THE QUESTION HERE"
                                maxLength={200}
                                onChange={(e) => {mountQuestion(e.target.value, 4);}}
                                enabled={(currentQuestion.status <= 1) ? "all" : "none"}
                            />
                            <OptionsDiv>
                                {
                                    currentQuestion.options.map((option, index) => {
                                        return(
                                            <AnswerOption
                                                key={index}
                                                value={option.text}
                                                selected={(option.iR) && "green"}
                                                placeholder={`${index+1}° OPTION HERE`}
                                                maxLength={60}
                                                onChange={(e) => {
                                                    mountQuestion(e.target.value,index);
                                                }}
                                                onClick={() => {(currentQuestion.status === 1) && selectTheRightOPtion(index)}}
                                                enabled={(currentQuestion.status <= 1 ) ? "all" : "none"}
                                            />
                                        );
                                    })
                                }
                            </OptionsDiv>
                        </InputsDiv>
                        { (currentQuestion.status === 1 ) && <H3>select the options that is the right answer!</H3>}
                    </ContentsSquare>
                    <FinishQuestionButton
                        btBottom={"80px"}
                        btRight={"15px"}
                        enabled={(quizTitle.length > 0 && listOfQuestions.length > 0) ? "all" : "none"}
                        onClick={() => {mountQuiz()}}
                    >
                        CREATE MY QUIZ
                    </FinishQuestionButton>
                    <FinishQuestionButton
                        btBottom={"30px"}
                        btRight={"15px"}
                        onClick={() => { (currentQuestion.status == 1) && saveQuestionAndNext();}}
                        enabled={(currentQuestion.status === 1) ? "all" : "none"}
                    >
                        FINISH AND ADD 
                    </FinishQuestionButton>
                </DivToManageDisplay>
            </ContedDiv>
        </MainContent>
    );
}