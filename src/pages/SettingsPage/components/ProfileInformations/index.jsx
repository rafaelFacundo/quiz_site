import React from "react";
import ProfilePhoto from "../../../../assets/profile_icon.png";
import {
    MainContent,
    ProfilePhotoDiv,
    P,
    PersonalInformationDiv,
    Label,
    InputAndIConDiv,
    Input
} from "./style";
import {Image, LoginButton}from "../../../../components/styles"

export default function ProfileInformation() {
    return(
        <MainContent>
            <P>Your profile photo: </P>
            <ProfilePhotoDiv>
                <Image
                    src={ProfilePhoto}
                    imgWidth={"60px"}
                    imgHeight={"60px"}
                />
                <LoginButton>CHANGE PHOTO</LoginButton>
                <LoginButton>REMOVE PHOTO</LoginButton>
            </ProfilePhotoDiv>
            <P>Your personal information: </P>
            <PersonalInformationDiv>
                <Label>Your username: </Label>
                <InputAndIConDiv>
                    <Input type="text" value="rafael"/>
                </InputAndIConDiv>
                <Label>Your e-mail:</Label>
                <InputAndIConDiv>
                    <Input type="text" value="rafael@gamil.com"/>
                </InputAndIConDiv>
                <Label>Your password: </Label>
                <InputAndIConDiv>
                    <Input type="password"/>
                </InputAndIConDiv>
                <Label>To change your password click in the button below </Label>
                <LoginButton>Make login to change password</LoginButton>
                <Label>Your bios: </Label>
                <InputAndIConDiv>
                    <Input type="text" value="hello"/>
                </InputAndIConDiv>
            </PersonalInformationDiv>

        </MainContent>
    );
}