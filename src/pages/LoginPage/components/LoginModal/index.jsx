import React from "react";
import {Link} from 'react-router-dom';
import GoogleIcon from '../../../../assets/google_login_icon.png';
import FacebookIcon from '../../../../assets/facebook_icon.png';
import SnapIcon from '../../../../assets/snap_icon.png';
import TwitterIcon from '../../../../assets/twitter_icon.png';
import TikTokIcon from '../../../../assets/tiktok_icon.png';
import ArrowDown from "../../../../assets/down_arrow.png";
import {
    Label,
    Input,
    LoginOptionIcon,
    LoginOptionDiv,
    LoginOptionsList,
    LoginOption,
} from './styles'
import {
    LoginButton,
    Text,
    LoginSignUpDiv,
    MainContentLoginSignUp,
    H3,
    Image,
} from "../../../../components/styles";
import { useState } from "react";

export default function LoginModal() {
    function ListOption(iconImage, name) {
        this.img = iconImage;
        this.name = name;
    }
    const [showOptions, setShowOptions] = useState(false);
    const [loginOptionsList, setLoginOptionsList] = useState(
        [  
            new ListOption(FacebookIcon, "Facebook"),
            new ListOption(SnapIcon, "Snap"),
            new ListOption(TwitterIcon, "Twitter"),
            new ListOption(TikTokIcon, "TikTok")
        ]
    )
    const [currentLoginOption, setCurrentLoginOption] = useState(new ListOption(GoogleIcon, "Google"));

    function changeLoginOption(optionIndex) {
        const optionSelected = loginOptionsList.splice(optionIndex,1)[0];
        const newLoginOptionsList = [...loginOptionsList];
        newLoginOptionsList.push(currentLoginOption);
        setCurrentLoginOption(optionSelected);
        setLoginOptionsList(newLoginOptionsList);
        setShowOptions(!showOptions);
    }

    return(
        <LoginSignUpDiv>
            <MainContentLoginSignUp>
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
                    <LoginOptionDiv>
                        <LoginOptionsList listDisplay={showOptions}>
                            {
                                loginOptionsList.map((loginOption, index) => {
                                    return(
                                        <LoginOption key={index}  onClick={() => {changeLoginOption(index)}}>
                                            <Image imgMargin={"0"} src={loginOption.img} />
                                        </LoginOption>
                                    );
                                })
                            }
                        </LoginOptionsList>
                        <LoginOptionIcon 
                            src={ArrowDown}
                        />
                        <Image
                            onClick={() => {setShowOptions(!showOptions)}}
                            src={currentLoginOption.img}
                        />
                    </LoginOptionDiv>
                    <Link to={'/auth/login/google'}>Make login with {currentLoginOption.name}</Link>
                    
                </LoginButton>
                <Text textSize="12px" >If you do not have an account</Text>
                <Text 
                    textColor="#4025E4"
                    textSize="12px"
                >
                    <Link to={'/signup'}>CLICK HERE</Link>
                </Text>
            </MainContentLoginSignUp>
        </LoginSignUpDiv>
        
    );
}