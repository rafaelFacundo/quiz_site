import React from "react";
import LoginModal from "./components/LoginModal";
import {
    MainContent,
} from "./styles";

export default function LoginSignUpPage() {
    return(
        <MainContent>
            <LoginModal />
        </MainContent>
    );
}