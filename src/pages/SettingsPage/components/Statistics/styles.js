import styled from "styled-components";

const MainContent = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
`;
const GeneralInfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-bottom: 2px solid lightgray;
    width: 90%;
`;
const ContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 20px;
`;
const QuizzesInformation = styled.div`
    width: 90%;
`;
const Text = styled.p`
    color: ${props => props.textColor || "black"};
    margin-bottom: 10px;
    margin-top: 10px;
`;

const RightAndWrongDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
`
export {
    MainContent,
    GeneralInfoDiv,
    ContentDiv,
    QuizzesInformation,
    Text,
    RightAndWrongDiv
}