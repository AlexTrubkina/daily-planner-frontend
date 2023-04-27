import { Heading } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/profileHeader";
import DashBoardLayout from "../../layout/DashboardLayout";

function Profile() {
    return ( 
    <DashBoardLayout>
        <ProfileHeader/>
    </DashBoardLayout> );
}

export default Profile;