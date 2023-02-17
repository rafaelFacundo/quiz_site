import React from "react";
import LoginModal from "./components/LoginModal";
import UniverseAnimation from "./components/UniverseAnimation";
import {
    MainContent,
    H3
} from "./styles";

export default function LoginPage() {
    return(
        <MainContent>
            <H3>Discorver the universe across the quizzes</H3>
            <LoginModal />
            <UniverseAnimation />
        </MainContent>
    );
}