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
            backgroundColor="#b8eaff"
            border="2px solid #47a6ff"
        >
            <Flex gap="20px" alignItems="center">
                <Avatar
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
