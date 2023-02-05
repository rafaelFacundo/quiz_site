import styled from "styled-components";

const MainContent = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
`;
const ContedDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
`;
const PlayQuizDiv = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;


export {
    MainContent,
    ContedDiv,
    PlayQuizDiv,
}