import React from "react";
import GoogleIcon from '../../../../assets/google_login_icon.png';
import {
    MainDiv,
    MainContent,
    H3,
    Label,
    Input,
    Button,
    Text,
    Image
} from './styles'


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
                <Button>Make Login</Button>
                <Text afterBeforeContent="2px">OR</Text>
                <Button>
                    <Image src={GoogleIcon} />
                    Make login with Google
                </Button>
                <Text textSize="12px" >If you do not have an account</Text>
                <Text 
                    textColor="#4025E4"
                    textSize="12px"
                >
                    CLICK HERE
                </Text>
            </MainContent>
        </MainDiv>
        
    );
}