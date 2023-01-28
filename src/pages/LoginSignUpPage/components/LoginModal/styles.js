import styled from 'styled-components';

const MainDiv = styled.div`
    width: 400px;
    height: 550px;
    border-radius: 70px;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    background-color: white;
    color: black;
    position: absolute;
    right: 25px;
    top: 25px;
`
const MainContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`
const H3 = styled.h3`
    margin-bottom: 15px;
    margin-top: 25px;
    font-family: 'Holtwood One SC', 'arial';
    font-size: 48px;
    
`
const Text = styled.p`
    color: ${props => props.textColor || "black"};
    font-size: ${props => props.textSize || "16px"};
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 285px;
    &:after, &:before {
        content: "";
        flex: 1;
        border-bottom: ${props => props.afterBeforeContent || "0px"} solid gray;
        margin: 6px;
    }
`
const Label = styled.label`
    text-align: left;
    margin-bottom: 8px;
    margin-top: 10px;
`
const Input = styled.input`
    border-radius: 50px;
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    border: 2.5px solid lightgray;
`
const Button = styled.button`
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
const Image = styled.img`
    width: 30px;
    height: 30px;
`
export {
    MainDiv,
    MainContent,
    H3,
    Text,
    Label, 
    Input,
    Button,
    Image,
}