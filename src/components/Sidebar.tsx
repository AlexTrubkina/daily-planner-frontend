import React from "react";

import { Box, Heading, Stack } from "@chakra-ui/react";

import { sidebarLinks } from "../data/datasets";

function Sidebar(): JSX.Element {
    return (
        <Box
            padding="20px"
            w="300px"
            borderRadius="15px"
            h="95vh"
            bg="gray.100"
        >
            <Box mb="40px">
                <Heading color="gray.600" fontSize="3xl" fontWeight="bold">
                    Daily Planner
                </Heading>
            </Box>
            <Stack spacing={4}>
                {
                    sidebarLinks.map((link) => ( 
                        <Box fontWeight="semibold" backgroundColor="white" _hover={{opacity: "1", cursor: "pointer"}} opacity={0.8} borderRadius="10px" padding="10px" key={link}>
                            {link}
                        </Box>
                        )
                    )
                }
            </Stack>
        </Box>
    );
}

export default Sidebar;
