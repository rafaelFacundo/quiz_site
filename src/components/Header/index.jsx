import React from "react";
import SiteLogo from "../../assets/logo_site_quiz.png";
import ProfileIcon from "../../assets/user_icon.png";
import MagnifyingGlass from "../../assets/glass_icon.png";
import {
    MainContent,
    ButtonSearchDiv,
    UserAndButtonDiv,
    CreateQuizButton,
    SearchInput,
    ContentDiv,
    InputIcon
} from "./styles";
import { Image } from "../styles";

export default function Header() {
    return(
        <MainContent>
            <ContentDiv>
                <Image
                    src={SiteLogo}
                    imgWidth={"120px"}
                    imgHeight={"90px"}
                />
                <ButtonSearchDiv>
                    <SearchInput type="text" placeholder="SEARCH HERE"/>
                    <InputIcon src={MagnifyingGlass}/>
                </ButtonSearchDiv>
                <UserAndButtonDiv>
                    <CreateQuizButton>CREATE QUIZ</CreateQuizButton>
                    <Image
                        src={ProfileIcon}
                        imgWidth={"55px"}
                        imgHeight={"55px"}
                    />  
                </UserAndButtonDiv>
            </ContentDiv>
        </MainContent>
    );
}