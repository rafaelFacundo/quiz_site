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
    const [showOptions, setShowOptions] = useState(false);
    const [currentLoginOption, setCurrentLoginOption] = useState({
        loginOptionIcon: GoogleIcon,
        loginOptionName: "Google"
    });

    function changeLoginOption(loginOpName, loginOpImg) {
        let newCurreLoginOption = {...currentLoginOption};
        newCurreLoginOption.loginOptionName = loginOpName;
        newCurreLoginOption.loginOptionIcon = loginOpImg;
        setCurrentLoginOption(newCurreLoginOption);
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
                            <LoginOption onClick={() => {changeLoginOption("Google", GoogleIcon)}}>
                                <Image imgMargin={"0"} src={GoogleIcon}/>
                            </LoginOption>
                            <LoginOption onClick={() => {changeLoginOption("Facebook", FacebookIcon)}}>
                                <Image imgMargin={"0"} src={FacebookIcon}/>
                            </LoginOption>
                            <LoginOption onClick={() => {changeLoginOption("Snap", SnapIcon)}} >
                                <Image imgMargin={"0"} src={SnapIcon}/>
                            </LoginOption>
                            <LoginOption onClick={() => {changeLoginOption("Twitter", TwitterIcon)}} >
                                <Image imgMargin={"0"} src={TwitterIcon}/>
                            </LoginOption>
                            <LoginOption onClick={() => {changeLoginOption("TikTok", TikTokIcon)}} >
                                <Image imgMargin={"0"} src={TikTokIcon}/>
                            </LoginOption>
                        </LoginOptionsList>
                        <LoginOptionIcon 
                            src={ArrowDown}
                        />
                        <Image
                            onClick={() => {setShowOptions(!showOptions)}}
                            src={currentLoginOption.loginOptionIcon}
                        />
                    </LoginOptionDiv>
                    Make login with {currentLoginOption.loginOptionName}
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