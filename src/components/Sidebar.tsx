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
            backgroundColor="#e0e0e0"
            boxShadow="34px 34px 60px #bebebe, -34px -34px 60px #ffffff"
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
                            backgroundColor="linear-gradient(145deg, #f0f0f0, #cacaca)"
                            boxShadow="9px 9px 18px #bebebe, -9px -9px 18px #ffffff"
                            _hover={{
                                background:
                                    "linear-gradient(145deg,#cacaca, #f0f0f0)",
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
