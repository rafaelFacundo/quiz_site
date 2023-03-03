import styled from "styled-components"; 

const LoginButton = styled.button`
    border-radius: 50px;
    margin-top: ${ props => props.marginTop || "15px"};
    margin-left: ${props => props.buttoMarginLeft || "0px"};
    background-color: ${props => props.buttonBackground || "#D9D9D9"};
    height: ${ props => props.buttonHeight || "60px"};
    width: ${ props => props.buttonWidth || "300px"};
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
`;
const Text = styled.p`
    color: ${props => props.textColor || "black"};
    font-size: ${props => props.textSize || "16px"};
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: space-around;
    width: ${props => props.textWidth || "285px"};
    &:after, &:before {
        content: "";
        flex: 1;
        border-bottom: ${props => props.afterBeforeBorder || "0px"} solid gray;
        margin: 6px;
    }
`;
const Image = styled.img`
    width: ${props => props.imgWidth || "30px"};
    height: ${props => props.imgHeight || "30px"};
    
    &:hover {
        cursor: pointer;
    }
`;
const Titles = styled.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: ${props => props.titleFontSize};
    line-height: 50px;
    color: black;
    position: absolute;
    left: 430px;
    width: 450px;
    
`;
const MainContent = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: ${ props => props.contentDisplay || "block"};
`;
const QuizContents = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;
const ContedDiv = styled.div` 
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px;
`;

const LoginSignUpDiv = styled.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25); 
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`;

const MainContentLoginSignUp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const H3 = styled.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`;

export {
    LoginButton,
    Text,
    Image,
    Titles,
    MainContent,
    QuizContents,
    ContedDiv,
    LoginSignUpDiv,
    MainContentLoginSignUp,
    H3
}