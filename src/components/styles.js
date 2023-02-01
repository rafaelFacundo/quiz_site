import styled from "styled-components"; 

const LoginButton = styled.button`
    border-radius: 50px;
    margin-top: 15px;
    background-color: #D9D9D9;
    height: 60px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
`
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
`

const Image = styled.img`
    width: ${props => props.imgWidth || "30px"};
    height: ${props => props.imgHeight || "30px"};
    
`

export {
    LoginButton,
    Text,
    Image
}