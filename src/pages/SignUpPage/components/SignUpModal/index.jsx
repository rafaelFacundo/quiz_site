import React from "react";
import GoogleIcon from '../../../../assets/google_login_icon.png';
import FacebookIcon from '../../../../assets/facebook_icon.png';
import SnapIcon from '../../../../assets/snap_icon.png';
import TwitterIcon from '../../../../assets/twitter_icon.png';
import TikTokIcon from '../../../../assets/tiktok_icon.png';
import { 
    LoginButton,
    Text,
    Image,
    LoginSignUpDiv,
    MainContentLoginSignUp,
    H3
} from "../../../../components/styles";
import { Link } from "react-router-dom";

export default function SignUpModal() { 
    return(
        <LoginSignUpDiv>
            <MainContentLoginSignUp>
                <H3>SIGN UP</H3>
                <Text>Choose the best way to you sign up: </Text>
                <LoginButton>
                    <Image src={GoogleIcon} />
                    With Google
                </LoginButton>
                <LoginButton>
                    <Image src={FacebookIcon} />
                    With Facebook
                </LoginButton>
                <LoginButton>
                    <Image src={TwitterIcon} />
                    With Twitter
                </LoginButton>
                <LoginButton>
                    <Image src={SnapIcon} />
                    With Snap
                </LoginButton>
                <LoginButton>
                    <Image src={TikTokIcon} />
                    With Tik Tok
                </LoginButton>
                <Text 
                    textColor="#4025E4"
                    textSize="12px"
                >
                   <Link to={'/login'}>BACK TO LOGIN</Link>
                </Text>
            </MainContentLoginSignUp>
        </LoginSignUpDiv>
        
    );
}