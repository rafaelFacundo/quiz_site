import React from "react";
import {
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
        <MainContent>
            <H3>LOGIN</H3>
            <Label>Type your e-mail: </Label>
            <Input
                placeholder="Type your e-mail here"
                type="text"
            />
            <Label>Type your password: </Label>
            <Input
                placeholder="Type your password here"
                type="password"
            />
            <Button>Make Login</Button>
            <Text>OR</Text>
            <Button>Make login with Google</Button>
            <Text>If you do not have an account CLICK HERE</Text>
        </MainContent>
    );
}