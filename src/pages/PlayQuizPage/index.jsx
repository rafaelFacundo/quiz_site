import React from "react";
import Header from "../../components/Header/index";
import QuestionAndOptions from "./components/QuestionAndOptions";
import {
    MainContent,
    PlayQuizDiv,
    ContedDiv
} from "./style";


export default function PlayQuizPage(){
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <PlayQuizDiv>
                    <QuestionAndOptions />
                </PlayQuizDiv>  
            </ContedDiv>
            
        </MainContent>
    );
}