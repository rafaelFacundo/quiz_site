import React from "react";
import Header from "../../components/Header/index";
import QuestionAndOptions from "./components/QuestionAndOptions";
import {
    MainContent,
    ContentsSquare,
    ContedDiv
} from "../../components/styles";



export default function PlayQuizPage(){
    const list = [1,2,3,4,5,6];
    const quiz = {
        id: 'sdj8vsib58',
        owner_id: 'dofoi8sfw38',
        title: 'Imagine one title here',
        number_of_questions: 6,
        quiz_cover: null,
        number_of_players: 12,
        questions: [
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
            {   
                questions_image: null,
                question: 'Who is the creator of dragon ball',
                options: [
                    {text: 'matt groening', iR: 1},
                    {text: 'Akira toriama', iR: 0},
                    {text: 'steven morfat', iR: 0},
                    {text: 'hajime yatate', iR: 0},
                ]
            },
            {   
                questions_image: null,
                question: 'Who is the sadsadas of dragon ball',
                options: [
                    {text: 'matt groening', iR: 1},
                    {text: 'Akira toriama', iR: 0},
                    {text: 'steven morfat', iR: 0},
                    {text: 'hajime yatate', iR: 0},
                ]
            },
            {   
                questions_image: null,
                question: 'Who is the creaasdasdasdtor of dragon ball',
                options: [
                    {text: 'matt groening', iR: 1},
                    {text: 'Akira toriama', iR: 0},
                    {text: 'steven morfat', iR: 0},
                    {text: 'hajime yatate', iR: 0},
                ]
            },
        ]
    }
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <ContentsSquare>
                    <QuestionAndOptions ListOfQuestions={quiz.questions} />
                </ContentsSquare>  
            </ContedDiv>
            
        </MainContent>
    );
}