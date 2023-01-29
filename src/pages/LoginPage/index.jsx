import React from "react";
import LoginModal from "./components/LoginModal";
import SignUpModal from "../SignUpPage/components/SignUpModal";
import {
    MainContent,
} from "./styles";

export default function LoginPage() {
    return(
        <MainContent>
            <LoginModal />
        </MainContent>
    );
}