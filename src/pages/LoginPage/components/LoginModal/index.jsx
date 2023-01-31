import React from "react";
import {Link} from 'react-router-dom';
import GoogleIcon from '../../../../assets/google_login_icon.png';
import {
    MainDiv,
    MainContent,
    H3,
    Label,
    Input,
} from './styles'
import { LoginButton, Text, Image } from "../../../../components/styles";

export default function LoginModal() {
    return(
        <MainDiv>
            <MainContent>
                <H3>LOGIN</H3>
                <>
                <Label>Type your e-mail: </Label>
                <Input
                    placeholder="Type your e-mail here"
                    type="text"
                />
                </>
                
                <Label>Type your password: </Label>
                <Input
                    placeholder="Type your password here"
                    type="password"
                />
                <LoginButton>Make Login</LoginButton>
                <Text afterBeforeBorder="2px">OR</Text>
                <LoginButton>
                    <Image src={GoogleIcon} />
                    Make login with Google
                </LoginButton>
                <Text textSize="12px" >If you do not have an account</Text>
                <Text 
                    textColor="#4025E4"
                    textSize="12px"
                >
                    <Link to={'/signup'}>CLICK HERE</Link>
                </Text>
            </MainContent>
        </MainDiv>
        
    );
}