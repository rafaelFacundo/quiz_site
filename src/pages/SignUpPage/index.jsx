import React from "react";
import SignUpModal from "./components/SignUpModal";
import {
    MainContent,
} from "./styles";

export default function SignUpPage() {
    return(
        <MainContent>
            <SignUpModal />
        </MainContent>
    );
}