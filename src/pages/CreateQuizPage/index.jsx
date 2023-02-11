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
    const [listOfQuestions, SetListOfQuestions] = useState([]);
    const [currentQuestion, SetCurrentQuestion] = useState({});
    const [currentId, SetCurrentId] = useState(0);
    
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <Image src={LeftArrow} Top={"50vh"} Left={"30px"} enabled={(currentId > 0) ? "all" : "none"}/>
                <Image src={RightArrow} Top={"50vh"} Right={"30px"} enabled={(currentId < listOfQuestions.length) ? "all" : "none"}/>
                <CreateQuizDiv>
                    <InputsDiv>
                        <InputQuestion placeholder="TYPE THE QUESTION HERE" maxLength={200}/>
                        <OptionsDiv>
                            <AnswerOption placeholder="RIGHT ANSWER HERE" maxLength={60}/>
                            <AnswerOption placeholder="SECOND OPTION HERE" maxLength={60}/>
                            <AnswerOption placeholder="THIRD OPTION HERE" maxLength={60}/>
                            <AnswerOption placeholder="FOURTH OPTION HERE" maxLength={60}/>
                        </OptionsDiv>
                    </InputsDiv>
                </CreateQuizDiv>
                <FinishQuestionButton>FINISH QUESTION</FinishQuestionButton>
            </ContedDiv>
        </MainContent>
    );
}