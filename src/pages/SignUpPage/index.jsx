import React from "react";
import SignUpModal from "./components/SignUpModal";
import UniverseAnimation from "../../components/UniverseAnimation";
import {
    Titles,
    MainContent
} from "../../components/styles";

export default function SignUpPage() {
    return(
        <MainContent>
            <Titles titleFontSize={"40px"}>Discorver the universe across the quizzes</Titles>
            <SignUpModal />
            {/* <UniverseAnimation /> */}
        </MainContent>
    );
}