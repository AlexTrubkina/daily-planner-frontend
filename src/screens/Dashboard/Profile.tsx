import { Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/profileHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import DashBoardLayout from "../../layout/DashboardLayout";

function Profile() {
    return ( 
    <DashBoardLayout>
        <ProfileHeader/>
        
        <ProfileInfoCard />
    </DashBoardLayout> );
}

export default Profile;