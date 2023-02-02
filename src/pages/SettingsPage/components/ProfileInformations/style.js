import styled from "styled-components";

const MainContent = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    width: 900px; 
    height: 500px;
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
const PersonalInformationDiv = styled.div``;
const Label = styled.div``;
const InputAndIConDiv = styled.div``;
const Input = styled.input``;

export {
    MainContent,
    ProfilePhotoDiv,
    P,
    PersonalInformationDiv,
    Label,
    InputAndIConDiv,
    Input
}