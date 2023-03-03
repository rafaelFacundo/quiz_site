import React from "react";
import LoginModal from "./components/LoginModal";
import UniverseAnimation from "../../components/UniverseAnimation";
import {
    Titles,
    MainContent
} from "../../components/styles";

export default function LoginPage() {
    return(
        <MainContent contentDisplay={"flex"}>
            <Titles titleFontSize={"40px"}>Discorver the universe across the quizzes</Titles>
            <LoginModal />
            {/* <UniverseAnimation /> */}
        </MainContent>
    );
}