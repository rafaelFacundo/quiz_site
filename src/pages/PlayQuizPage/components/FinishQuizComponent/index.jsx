import React from "react";
import styled from "styled-components";
import KickButowisck from "../../../../assets/kick_buto.png";
import {LoginButton} from "../../../../components/styles";

const MainContent = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const Text = styled.h1`
    color: black;
    margin: 5px;
`;
const SubText = styled.h4`
    color: black;
`;
const Image = styled.img`
    width: 100px;
    height: 100px;
    margin: 0;
    position: absolute;
    top: 20px;
    right: 180px;
`;

export default function FinishQuiz({pointMade, maxPoints}) {
    return(
        <MainContent>
            <Text>You rock!</Text>
            <Image src={KickButowisck} />
            <SubText>Congratulations my fella, you made {pointMade} of {maxPoints} points</SubText>
            <LoginButton>EXPLORE MORE!</LoginButton>
        </MainContent>
    );
}