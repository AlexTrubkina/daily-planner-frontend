import React from "react";

import { Avatar, Box, Flex } from "@chakra-ui/react";

function ProfileHeader({
    firstName,
    lastName,
}: {
    firstName: string;
    lastName: string;
}): JSX.Element {
    return (
        <Box
            borderRadius="15px"
            padding="20px"
            backgroundColor="#e0e0e0"
            boxShadow="inset -9px 9px 18px #bebebe, inset 9px -9px 18px #ffffff"
        >
            <Flex gap="20px" alignItems="center">
                <Avatar
                    boxShadow="5px -5px 10px #bebebe, -5px 5px 10px #ffffff"
                    size="xl"
                    src="/images/cat-class.jpeg"
                />
                <Box>
                    <Box fontWeight="semibold" color="blackAlpha.600">
                        {firstName}
                    </Box>
                    <Box fontWeight="semibold" color="blackAlpha.600">
                        {lastName}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default ProfileHeader;
