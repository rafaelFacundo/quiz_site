import React from "react";
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
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <Image src={LeftArrow} Top={"50vh"} Left={"30px"}/>
                <Image src={RightArrow} Top={"50vh"} Right={"30px"}/>
                <CreateQuizDiv>
                    <InputsDiv>
                        <InputQuestion placeholder="TYPE THE QUESTION HERE"/>
                        <OptionsDiv>
                            <AnswerOption placeholder="RIGHT ANSWER HERE" maxLength={100}/>
                            <AnswerOption placeholder="SECOND OPTION HERE" />
                            <AnswerOption placeholder="THIRD OPTION HERE" />
                            <AnswerOption placeholder="FOURTH OPTION HERE" />
                        </OptionsDiv>
                    </InputsDiv>
                </CreateQuizDiv>
                <FinishQuestionButton>FINISH QUESTION</FinishQuestionButton>
            </ContedDiv>
        </MainContent>
    );
}