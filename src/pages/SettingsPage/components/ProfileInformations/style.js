import styled from "styled-components";

const MainContent = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
    box-sizing: border-box;
    padding: 15px;
`;

const ProfilePhotoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 2px solid lightgray;
`
const P = styled.p`
    color: black;
`;
const PersonalInformationDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`;
const Label = styled.label`
    color: black;
`;
const InputLabelDiv = styled.div`
    width: 300px;
    margin: 10px;
`;
const InputAndIConDiv = styled.div`
    position: relative;
`;
const Input = styled.input`
    width: 100%;
    height: 40px;
    padding-left: 40px;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
`;


export {
    MainContent,
    ProfilePhotoDiv,
    P,
    PersonalInformationDiv,
    Label,
    InputAndIConDiv,
    Input,
    InputLabelDiv,
    Icon
}