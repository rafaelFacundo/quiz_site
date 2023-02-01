import React from "react";
import {
    MainContent,
    GeneralInfoDiv,
    ContentDiv,
    QuizzesInformation,
    Text,
    RightAndWrongDiv
} from "./styles";
import { Image } from "../../../../components/styles";

export default function StatisticsComponent() {
    return(
        <MainContent>
            <ContentDiv>
                
                <GeneralInfoDiv>
                    <Text>GENERAL INFORMATION: </Text>
                    <Text>Number of quizzes created: 10</Text>
                    <Text>Number of quizzes played: 50</Text>
                    <Text>Number of answered questions: 100</Text>
                    <RightAndWrongDiv>
                        <Text textColor={"green"}>Right: 90</Text>
                        <Text textColor={"red"}>Wrong: 10</Text>
                    </RightAndWrongDiv>
                    
                </GeneralInfoDiv>
                <QuizzesInformation>
                    <Text textWidth={"100%"} alignItems={"flex-start"} >Created quizzes information: </Text>
                    <Text textWidth={"100%"}>Number of users that have played your quizzes: 200</Text>
                    <Text textWidth={"100%"}>Number of likes in your quizzes received: 150</Text>
                    <Text textWidth={"100%"}>Number of right answers: 100</Text>
                    <Text textWidth={"100%"}>Number of wrong answers: 200</Text>
                </QuizzesInformation>
            </ContentDiv>
        </MainContent>
    );
}