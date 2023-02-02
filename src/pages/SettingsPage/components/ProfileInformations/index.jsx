import React from "react";
import ProfilePhoto from "../../../../assets/profile_icon.png";
import ProfileIcon from "../../../../assets/Sample_User_Icon.png";
import EmailIcon from "../../../../assets/email_icon.png";
import PasswordIcon from "../../../../assets/password_icon.png";
import {
    MainContent,
    ProfilePhotoDiv,
    P,
    PersonalInformationDiv,
    Label,
    InputAndIConDiv,
    Input,
    InputLabelDiv,
    Icon,
} from "./style";
import {Image, LoginButton}from "../../../../components/styles"

export default function ProfileInformation() {
    return(
        <MainContent>
            <P>Your profile photo: </P>
            <ProfilePhotoDiv>
                <Image
                    src={ProfilePhoto}
                    imgWidth={"80px"}
                    imgHeight={"80px"}
                />
                <LoginButton
                    buttoMarginLeft={"30px"}
                    buttonHeight={"40px"}
                    buttonWidth={"200px"}
                    marginTop={"0px"}
                    buttonBackground={"lightblue"}
                >
                    CHANGE PHOTO
                </LoginButton>
                <LoginButton
                    buttoMarginLeft={"30px"}
                    buttonHeight={"40px"}
                    buttonWidth={"200px"}
                    marginTop={"0px"}
                    buttonBackground={"red"}
                >
                    REMOVE PHOTO
                </LoginButton>
            </ProfilePhotoDiv>
            <P>Your personal information: </P>
            <PersonalInformationDiv>
                <InputLabelDiv>
                    <Label>Your username: </Label>
                    <InputAndIConDiv>
                        <Icon src={ProfileIcon} />
                        <Input type="text" value="rafael"/>
                    </InputAndIConDiv>
                </InputLabelDiv>
                <InputLabelDiv>
                    <Label>Your e-mail:</Label>
                    <InputAndIConDiv>
                        <Icon src={EmailIcon} />
                        <Input type="text" value="rafael@gamil.com"/>
                    </InputAndIConDiv>
                </InputLabelDiv>
                <InputLabelDiv>
                    <Label>Your password: </Label>
                    <InputAndIConDiv>
                        <Icon src={PasswordIcon} />
                        <Input type="password"/>
                    </InputAndIConDiv>
                </InputLabelDiv>
                <InputLabelDiv>
                    <Label>Do you want to change password?</Label>
                    <LoginButton
                        buttonWidth={"300px"}
                        buttonHeight={"40px"}
                        marginTop={"3px"}
                    >
                        Make login to change password
                    </LoginButton>
                </InputLabelDiv>
                
                
            </PersonalInformationDiv>
            <LoginButton
                buttonWidth={"200px"}
                buttonBackground={"green"}
                buttonHeight={"40px"}
            >
                SAVE CHANGES
            </LoginButton>
        </MainContent>
    );
}