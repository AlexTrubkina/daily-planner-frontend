import React from "react";

import { Box, Heading, Stack, Icon, Flex } from "@chakra-ui/react";

import { sidebarLinks } from "../data/datasets";
import { Link } from "react-router-dom";

function Sidebar(): JSX.Element {
    return (
        <Box
            padding="20px"
            w="300px"
            borderRadius="15px"
            h="95vh"
            backgroundColor="#b8eaff"
            border="2px solid #47a6ff"
        >
            <Box mb="40px">
                <Link to="/">
                    <Heading
                        color="blackAlpha.700"
                        fontSize="3xl"
                        fontWeight="bold"
                    >
                        Daily Planner
                    </Heading>
                </Link>
            </Box>
            <Stack spacing={4}>
                {sidebarLinks.map((link) => (
                    <Link key={link.name} to={link.link}>
                        <Flex
                            fontWeight="semibold"
                            color="blackAlpha.600"
                            border="2px solid #47a6ff"
                            _hover={{
                                background: "#47a6ff",
                                cursor: "pointer",
                            }}
                            borderRadius="10px"
                            padding="10px"
                            alignItems="center"
                            gap="10px"
                        >
                            <Icon viewBox='0 0 17 15' fontSize="18px">
                                {link.icon}
                            </Icon>
                            {link.name}
                        </Flex>
                    </Link>
                ))}
            </Stack>
        </Box>
    );
}

export default Sidebar;
