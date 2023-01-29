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

const Image = styled.img`
    width: 30px;
    height: 30px;
`
export {
    MainDiv,
    MainContent,
    H3,
    Label, 
    Input,
    Image,
}