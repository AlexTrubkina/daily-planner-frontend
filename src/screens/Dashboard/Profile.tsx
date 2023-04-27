import { Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/profileHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import DashBoardLayout from "../../layout/DashboardLayout";

function Profile() {
    return (
        <DashBoardLayout>
            <ProfileHeader 
                firstName="Валентина"
                lastName="Пирожкова" 
            />

            <ProfileInfoCard
                firstName="Валентина"
                lastName="Пирожкова"
                description="Я люблю одуванчики и купаться"
                feeling="офигенное"
            />
        </DashBoardLayout>
    );
}

export default Profile;
