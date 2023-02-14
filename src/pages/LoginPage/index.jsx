import React from "react";
import LoginModal from "./components/LoginModal";
import UniverseAnimation from "./components/UniverseAnimation";
import {
    MainContent,
} from "./styles";

export default function LoginPage() {
    return(
        <MainContent>
            <LoginModal />
            <UniverseAnimation />
        </MainContent>
    );
}