import React, { useState } from "react";
import ProfileIcon from "../../assets/profile_icon.png";
import ChartIcon from "../../assets/Line_Chart_icon.png";
import {
    MainContent,
    ContedDiv,
    Navigation,
    NavList,
    NavOption
} from "./styles";
import { Image, Text } from "../../components/styles";
import Header from "../../components/Header";

export default function SettingsPage() {
    // In this hook we decide which section we'll show
    // if it's true we must show the profile section
    // and if it's false we must show the statistics section
    const [whatToShow, setWhatToShow] = useState(true);
    
    return(
        <MainContent>
            <Header />
            <ContedDiv>
                <Navigation>
                    <NavList>
                        <NavOption onClick={() => {setWhatToShow(true)}}>
                            <Image
                                src={ProfileIcon}
                                imgWidth={"20px"}
                                imgHeight={"20px"}
                            />
                            <Text>PROFILE</Text>
                        </NavOption>
                        <NavOption onClick={() => {setWhatToShow(false)}}>
                            <Image
                                src={ChartIcon}
                                imgWidth={"20px"}
                                imgHeight={"20px"}
                            />
                            <Text>STATISTICS</Text>
                        </NavOption>
                    </NavList>
                </Navigation>
                
            </ContedDiv>
        </MainContent>
    );
}