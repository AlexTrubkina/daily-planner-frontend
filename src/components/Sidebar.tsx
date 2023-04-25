import React from "react";

import { Box, Stack } from "@chakra-ui/react";

function Sidebar(): JSX.Element {
    const sidebarLinks: Array<string> = [
        "Мой дневник",
        "Мое настроение",
        "Профиль",
    ];

    return (
        <Box
            position="fixed"
            left={0}
            p={5}
            w="200px"
            top={0}
            h="100%"
            bg="#dfdfdf"
        >
            <Stack spacing={8}>
                {
                    sidebarLinks.map((link) => ( 
                        <Box backgroundColor="gray.100" borderRadius="15px" padding="10px" key={link}>
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
